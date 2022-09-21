import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import httpAdmin from "../../../http";
import IPrato from "../../../interfaces/IPrato"

export default function AdminPratos() {
    const [pratos, setPratos] = useState<IPrato[]>([]);

    useEffect(() => {
        list();
    }, []);

    const list = () => {
        httpAdmin.get<IPrato[]>('pratos/')
            .then(({ data }) => setPratos(data))
            .catch(console.error);
    }

    const deleteRestaurant = (prato: IPrato) => {
        httpAdmin.delete(`pratos/${prato.id}/`)
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
                        <TableCell>Tag</TableCell>
                        <TableCell>Imagem</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Deletar</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {pratos.map(prato =>
                        <TableRow key={prato.id}>
                            <TableCell>{prato.nome}</TableCell>
                            <TableCell>{prato.tag}</TableCell>
                            <TableCell>
                                <img width={100} src={prato.imagem} alt={prato.nome}/>
                            </TableCell>
                            <TableCell>
                                <Link to={`/admin/pratos/${prato.id}`}>Editar</Link>
                            </TableCell>
                            <TableCell>
                                <Button 
                                    color="error"
                                    variant="outlined"
                                    onClick={() => deleteRestaurant(prato)}>
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
