import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DetalleProducto = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);
    const agregarCarrito = () => {
        navigate('/carrito');
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4'>
                Abrigo
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Paper variant='outlined' square className={classes.PaperImg}>
                        <CardMedia image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png"
                            title="Mi proyecto"
                            className={classes.mediaDetalle}
                        />
                    </Paper>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <TableContainer component={Paper} variant='outlined'>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subtitle2'>Precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subtitle2'>$25.99</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subtitle2'> Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size='small'
                                            select
                                            variant='outlined'
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        >
                                            <MenuItem value={0} disabled>Seleccione Cantidad</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            size='large'
                                            onClick={() => { agregarCarrito() }}
                                        >
                                            Agregar al carrito
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: $25.99
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades Disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: Nike
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripción:
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetalleProducto;