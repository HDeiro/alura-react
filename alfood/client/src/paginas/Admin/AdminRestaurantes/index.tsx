import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante"

export default function AdminRestaurantes() {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        list();
    }, []);

    const list = () => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(({ data }) => setRestaurantes(data))
            .catch(console.error);
    }

    const deleteRestaurant = (restaurante: IRestaurante) => {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${restaurante.id}/`)
            .then(() => {
                console.log('Deletado');
                list();
            })
            .catch(console.error);
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Deletar</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {restaurantes.map(restaurante =>
                        <TableRow key={restaurante.id}>
                            <TableCell>{restaurante.nome}</TableCell>
                            <TableCell>
                                <Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link>
                            </TableCell>
                            <TableCell>
                                <Button 
                                    color="error"
                                    variant="outlined"
                                    onClick={() => deleteRestaurant(restaurante)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
