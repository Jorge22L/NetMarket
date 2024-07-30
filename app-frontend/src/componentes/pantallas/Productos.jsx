import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Pagination, Typography } from '@mui/material';
import useStyles from '../../theme/useStyles';
import { useEffect, useState } from 'react';
// import { ProductoArray } from '../data/data_prueba';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../../actions/ProductoActions';
import { addItem } from '../../actions/CarritoCompraAction';
import { useStateValue } from '../../contexto/store';

const Productos = () => {

    const [ {sesionCarritoCompra}, dispatch] = useStateValue();

    const[requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ""
    })

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    useEffect(() => {
        const getListaProductos = async () => {
            const response = await getProductos(requestProductos);
            setPaginadorProductos(response);
        }

        getListaProductos();
    }, [requestProductos]);

    const navigate = useNavigate();
    const classes = useStyles();
    //const miArray = ProductoArray;

    if(!paginadorProductos.data){
        return null;
    }
    const verProducto = async (item) => {
        //await addItem(sesionCarritoCompra, item, dispatch)
        console.log('ver producto: ', item.id);
        navigate(`/detalleProducto/${item.id}`);
    }

    const handleChange = (event, value) => {
        setRequestProductos((anterior) =>({
            ...anterior,
            pageIndex: value
        }) )
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                Productos
            </Typography>

            <Grid container spacing={4}>
            { paginadorProductos.data.map(data => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={data.id}>
                    
                    <Card>
                        <CardMedia image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png" 
                        title="Mi producto" className={classes.media}>
                            <Avatar variant='square' className={classes.price}>${data.precio}</Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h5' className={classes.text_card}>
                                {data.nombre}
                            </Typography>
                            <Button 
                                variant='contained' 
                                color='primary' 
                                fullWidth
                                onClick={() => verProducto(data)}>
                                Más detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination 
                count={paginadorProductos.pageCount} 
                page={paginadorProductos.pageIndex} 
                onChange={handleChange}
                />
        </Container>
    )
}

export default Productos;