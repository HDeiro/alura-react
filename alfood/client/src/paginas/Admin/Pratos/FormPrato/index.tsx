import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpAdmin from "../../../../http";
import IPrato from "../../../../interfaces/IPrato";
import IRestaurante from "../../../../interfaces/IRestaurante";
import ITag from "../../../../interfaces/ITag";

export default function FormPrato() {
    const { id } = useParams();
    
    const [tagList, setTagList] = useState<ITag[]>([]);
    const [restauranteList, setRestauranteList] = useState<IRestaurante[]>([]);

    const [nome, setNome] = useState('');
    const [tag, setTag] = useState('');
    const [descricao, setDescricao] = useState('');
    const [restaurante, setRestaurante] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);

    useEffect(() => {
        httpAdmin.get<{tags: ITag[]}>(`tags/`)
            .then(response => setTagList(response.data.tags))
            .catch(console.error);

        httpAdmin.get<IRestaurante[]>(`restaurantes/`)
            .then(response => setRestauranteList(response.data))
            .catch(console.error);

        if (id) {
            httpAdmin.get<IPrato>(`pratos/${id}/`)
                .then(response => {
                    const { nome, descricao, tag, restaurante } = response.data;
                    setNome(nome);
                    setDescricao(descricao);
                    setTag(tag);
                    setRestaurante(`${restaurante}`);
                })
                .catch(console.error);
        }
    }, [id]);
    
    const create = (payload: FormData) => { 
        httpAdmin.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: payload
        }).then(() => console.log('Cadastrado com sucesso'))
          .catch(console.error);
    }

    const update = (payload: FormData) => {
        httpAdmin.request({
            url: `pratos/${id}/`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: payload
        }).then(() => console.log('Atualizado com sucesso'))
          .catch(console.error);
    }

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!nome.length) return;

        const payload: FormData = new FormData();

        payload.append('nome', nome);
        payload.append('descricao', descricao);
        payload.append('tag', tag);
        payload.append('restaurante', restaurante);

        if (imagem) {
            payload.append('imagem', imagem);
        }

        id ? update(payload) : create(payload);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
            <Typography component="h1" variant="h6">
                {id ? 'Edição' : 'Criação'} de Pratos
            </Typography>
            <Box 
                sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}
                component="form" 
                onSubmit={onSubmitForm}>
                <TextField 
                    fullWidth
                    value={nome}
                    onChange={evt => setNome(evt.target.value)}
                    variant="standard" 
                    label="Nome" 
                    id="prato-name" 
                    margin="dense"
                    required
                />

                <TextField 
                    fullWidth
                    value={descricao}
                    onChange={evt => setDescricao(evt.target.value)}
                    variant="standard" 
                    label="Descrição" 
                    margin="dense"
                    id="prato-desc" 
                    required
                />

                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select 
                        value={tag}
                        onChange={evt => setTag(evt.target.value)}
                        labelId="select-tag">
                        {
                            tagList.map(tag => 
                                <MenuItem 
                                    value={tag.value} 
                                    key={tag.id}>
                                    { tag.value }
                                </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-restaurante">Restaurante</InputLabel>
                    <Select 
                        value={restaurante}
                        onChange={evt => setRestaurante(evt.target.value)}
                        labelId="select-restaurante">
                        {
                            restauranteList.map(restaurante => 
                                <MenuItem 
                                    value={restaurante.id} 
                                    key={restaurante.id}>
                                    { restaurante.nome }
                                </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <input 
                    type="file" 
                    onChange={evt => setImagem(
                        evt.target.files 
                            ? evt.target.files[0] 
                            : null
                    )}
                />

                <Button 
                    sx={{marginTop: '10px'}}
                    fullWidth
                    type="submit" 
                    variant="outlined">
                    Salvar
                </Button>
            </Box>
        </Box>
    );
}
    