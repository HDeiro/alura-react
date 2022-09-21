import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpAdmin from "../../../../http";
import IRestaurante from "../../../../interfaces/IRestaurante";

interface FormRestaurantPayload {
    nome: string;
}

export default function FormRestaurante() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        if (id) {
            httpAdmin.get<IRestaurante>(`restaurantes/${id}/`)
                .then(response => {
                    const restaurant = response.data;
                    setNome(restaurant.nome);
                })
                .catch(console.error);
        }
    }, [id]);
    
    const create = (payload: FormRestaurantPayload) => {        
        httpAdmin.post('restaurantes/', payload)
            .then(response => {
                console.log('Sucesso!', response);
                setNome('');
            })
            .catch(console.error);
    }

    const update = (payload: FormRestaurantPayload) => {
        httpAdmin.patch(`restaurantes/${id}/`, payload)
            .then(() => console.log('Alterado com Sucesso!'))
            .catch(console.error);
    }

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!nome.length) return;

        const payload = { nome };

        id ? update(payload) : create(payload);
    };
    
    const styleBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <Box sx={styleBox}>
            <Typography component="h1" variant="h6">
                {id ? 'Edição' : 'Criação'} de Restaurantes
            </Typography>
            <Box 
                sx={styleBox}
                component="form" 
                onSubmit={onSubmitForm}>
                <TextField 
                    fullWidth
                    value={nome}
                    onChange={evt => setNome(evt.target.value)}
                    variant="standard" 
                    label="Nome" 
                    id="rest-name" 
                    required
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
    