import { useEffect, useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducto } from '../../actions/ProductoActions';
import { addItem } from '../../actions/CarritoCompraAction';
import { useStateValue } from '../../contexto/store';

const DetalleProducto = () => {
    const [{sesionCarritoCompra}, dispatch] = useStateValue();
    const [cantidad, setCantidad] = useState(1);
    const id = useParams();
    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        stock: 0,
        marcaId: 0,
        marcaNombre: "",
        categoriaId: 0,
        categoriaNombre: "",
        precio: 0,
        imagen: ""
    });

    useEffect(() => {
        const getProductoAsync = async () => {
            const response = await getProducto(id);
            setProductoSeleccionado(response);
        }
        if(id){
            getProductoAsync();
        }
        
    }, [id]);

    const classes = useStyles();
    const navigate = useNavigate();
    const agregarCarrito = async () => {
        const item = {
            id: productoSeleccionado.id,
            producto: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            imagen: productoSeleccionado.imagen,
            cantidad: cantidad,
            marca: productoSeleccionado.marcaNombre,
            categoria: productoSeleccionado.categoriaNombre
        };

        await addItem(sesionCarritoCompra, item, dispatch);

        // navigate('/carrito');
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4'>
                {productoSeleccionado.nombre}
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Paper variant='outlined' square className={classes.PaperImg}>
                        <CardMedia image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png"
                            title={productoSeleccionado.descripcion}
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
                                        <Typography variant='subtitle2'>{productoSeleccionado.precio}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subtitle2'> Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                            id="cantidad-producto" 
                                            label="" 
                                            type="number" 
                                            value={cantidad}
                                            onChange={(e) => setCantidad(e.target.value)} 
                                            InputLabelProps={{shrink: true}}
                                            />
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
                                Precio: {productoSeleccionado.precio}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades Disponibles: {productoSeleccionado.stock}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: {productoSeleccionado.marcaNombre}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: {productoSeleccionado.categoriaNombre}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripción:
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                {productoSeleccionado.descripcion}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetalleProducto;