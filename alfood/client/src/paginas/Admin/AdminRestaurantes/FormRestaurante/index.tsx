import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../../interfaces/IRestaurante";

interface FormRestaurantPayload {
    nome: string;
}

export default function FormRestaurante() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        if (id) {
            axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${id}/`)
                .then(response => {
                    const restaurant = response.data;
                    setNome(restaurant.nome);
                })
                .catch(console.error);
        }
    }, [id]);
    
    const create = (payload: FormRestaurantPayload) => {        
        axios.post('http://localhost:8000/api/v2/restaurantes/', payload)
            .then(response => {
                console.log('Sucesso!', response);
                setNome('');
            })
            .catch(console.error);
    }

    const update = (payload: FormRestaurantPayload) => {
        axios.patch(`http://localhost:8000/api/v2/restaurantes/${id}/`, payload)
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
    