import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function FormRestaurante() {

    const [nome, setNome] = useState('');

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (!nome.length) return;

        const payload = { nome };

        axios.post('http://localhost:8000/api/v2/restaurantes/', payload)
            .then(response => {
                console.log('Sucesso!', response);
                setNome('');
            })
            .catch(console.error);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <TextField 
                value={nome}
                onChange={evt => setNome(evt.target.value)}
                variant="standard" 
                label="Nome" 
                id="rest-name" 
            />
            <Button 
                type="submit" 
                variant="outlined">
                Salvar
            </Button>
        </form>
    );
}
