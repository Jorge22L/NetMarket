import React from 'react';
import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { ProductoArray } from '../data/data_prueba';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const CarritoCompras = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const realizarCompra = () => {
        navigate('/procesoCompra');
    }
    const miArray = ProductoArray;
    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                Carrito de compras
            </Typography>

            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {miArray.map(producto =>(
                                    <TableRow key={producto.key}>
                                        <TableCell>
                                            <CardMedia className={classes.imgProductoCC}
                                                image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png"
                                                title="Mi imagen">
                                            </CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                {producto.titulo}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                ${producto.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                select
                                                value='outlined'
                                                size='small'
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                            </TextField>
                                        </TableCell>

                                        <TableCell>
                                            <IconButton>
                                                <Icon><DeleteIcon /></Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                </Grid>
                <Grid item lg={3} md={2} sm={6} xs={12}>
                    <Paper variant='outlined' square className={classes.paperPadding}>
                        <Typography variant='h6' className={classes.text_carrito}>
                            SubTotal ({miArray.length}) Productos
                        </Typography>
                        <Typography>
                            $143.66
                        </Typography>
                        <Divider className={classes.gridmb} />
                        <Button 
                            variant='contained' 
                            color='primary' 
                            size='large'
                            onClick={realizarCompra}
                            >
                                Realizar Compra
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarritoCompras;