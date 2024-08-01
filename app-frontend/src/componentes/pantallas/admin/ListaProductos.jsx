import { Button, Container, Grid, Icon, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useStyles from "../../../theme/useStyles";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductos } from "../../../actions/ProductoActions";


const ListaProductos = () => {
    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 4,
        search: "",
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const handleChange = (event, value) =>{
        setRequestProductos((anterior) => ({
            ...anterior,
            pageIndex: value
        }));
    }

    useEffect(() => {
        const getListaProductos = async () => {
            const response = await getProductos(requestProductos);
            console.log(response);
            setPaginadorProductos(response)
        }

        getListaProductos();
    },[requestProductos]);

    const classes = useStyles();
    const navigate = useNavigate();
    const agregarProducto = () => {
        navigate('/admin/agregarProducto');
    }
    const editaProducto = (id) => {
        navigate(`/admin/editarProducto/${id}`);
    }

    
    return (
        <Container className={classes.containermt_white}>
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant='h4' className={classes.text_carrito}>
                        Producto
                    </Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button
                        variant='contained' color='primary'
                        className={classes.buttonAgregar}
                        onClick={agregarProducto}>
                            <Icon><Add className={classes.iconSize} /></Icon>
                        Agregar Producto
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>PRECIO</TableCell>
                            <TableCell>MARCA</TableCell>
                            <TableCell>CATEGORIA</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginadorProductos.data.map(producto => (
                            <TableRow key={producto.id}>
                                <TableCell>{producto.id}</TableCell>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>{producto.precio}</TableCell>
                                <TableCell>{producto.marcaNombre}</TableCell>
                                <TableCell>{producto.categoriaNombre}</TableCell>
                                <TableCell>
                                    <Button
                                        variant='contained' 
                                        color='primary'
                                        onClick={() => editaProducto(producto.id)}
                                        >
                                        <Icon><Edit className={classes.iconSize} /></Icon>
                                    </Button>
                                    <Button
                                        variant='contained' color='secondary'
                                        >
                                        <Icon><Delete className={classes.iconSize} /></Icon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange} />
        </Container>
    );
};

export default ListaProductos;