import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { ProductoArray } from '../data/data_prueba';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../contexto/store';

const CarritoCompras = () => {

    const [{sesionCarritoCompra}, dispatch] = useStateValue();
    console.log('carrito de compras: ', sesionCarritoCompra);

    const productosCarrito = sesionCarritoCompra ? sesionCarritoCompra.items : [];
    let suma = 0;
    productosCarrito.forEach(prod => {
        suma = suma + (prod.precio * prod.cantidad);
    });

    const classes = useStyles();
    const navigate = useNavigate();
    const realizarCompra = () => {
        navigate('/procesoCompra');
    }
   
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
                                {productosCarrito.map(item =>(
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <CardMedia className={classes.imgProductoCC}
                                                image={item.imagen ? item.imagen : 'https://via.placeholder.com/300' }
                                                title={item.producto}>
                                            </CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                {item.producto}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                ${item.precio}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                {item.cantidad}
                                            </Typography>
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
                            SubTotal ({productosCarrito.length}) Productos
                        </Typography>
                        <Typography>
                            ${suma}
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