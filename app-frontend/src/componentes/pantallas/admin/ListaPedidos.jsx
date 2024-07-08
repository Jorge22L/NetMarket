import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ListaPedidos = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const verDetalles = () => {
        const id = "12345";
        navigate(`/ordenCompra/${id}`);
    }
    return (
        <Container className={classes.containermt_white}>
            <Typography variant='h4' className={classes.text_carrito}>
                Pedidos
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Pagado</TableCell>
                            <TableCell>Entregado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableBody>
                            <TableRow>
                                <TableCell>123456</TableCell>
                                <TableCell>José Palacios</TableCell>
                                <TableCell>2020-12-22</TableCell>
                                <TableCell>$120</TableCell>
                                <TableCell>2020-12-23</TableCell>
                                <TableCell>
                                    <Icon className={classes.iconDelivered}>
                                        <Check />
                                    </Icon>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant='contained' 
                                        color='primary'
                                        onClick={verDetalles}
                                        >
                                            Detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;