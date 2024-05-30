import { Grid, Button, CardMedia, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Divider } from '@mui/material';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { useParams } from 'react-router-dom';


const OrdenCompra = () => {
    const { id } = useParams();
    const mensajeEnvio = "No Entregado";
    const mensajePago = "Pagado";
    const classes = useStyles();
    
    return (
        <Container className={classes.containermt}>
            <Typography
                variant='h5' className={classes.text_title}>
                Orden de compra {id}
            </Typography>

            <Grid container spacing={2} className={classes.paperPaddingOrden}>
                <Grid item xs={12} md={6} className={classes.gridLR}>
                    <Typography variant='h6' className={classes.text_carrito}>
                        Envío
                    </Typography>
                    <Typography variant='body2' className={classes.text_carrito}>
                        Nombres: Jorge Morales
                    </Typography>
                    <Typography variant='body2' className={classes.text_carrito}>
                        Email: jorge@mail.com
                    </Typography>
                    <Typography variant='body2' className={classes.text_carrito}>
                        Dirección: Calle2, Ciudad2, Pais2
                    </Typography>
                    <div className={classes.alertDelivered}>
                        <Typography variant='body2' className={classes.text_carrito}>
                            {mensajePago}
                        </Typography>
                    </div>

                    <Divider className={classes.divider} />
                    <Typography variant='h6' className={classes.text_carrito}>
                        Método de Pago
                    </Typography>
                    <Typography variant='h6' className={classes.text_carrito}>
                        Método: Paypal
                    </Typography>
                    <Typography variant='h6' className={classes.text_carrito}>
                        Productos
                    </Typography>  
                </Grid>
                <Grid item xs={12} md={6}>
                <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <CardMedia className={classes.imgProductoPC}
                                            image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png"
                                            title="Imagen" />
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_carrito}>Abrigo</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_carrito}>2 * $25.00</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                       
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            fullWidth
                                            className={classes.gridmb}
                                        >
                                            Paypal
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            fullWidth
                                            className={classes.gridmb}
                                        >
                                            Tarjeta de débito o crédito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrdenCompra;