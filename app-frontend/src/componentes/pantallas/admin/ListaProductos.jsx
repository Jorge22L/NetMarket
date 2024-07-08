import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useStyles from "../../../theme/useStyles";
import { Add, Delete, Edit } from "@mui/icons-material";
import { ProductoArray } from "../../data/data_prueba";
import { useNavigate } from "react-router-dom";


const ListaProductos = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const agregarProducto = () => {
        navigate('/admin/agregarProducto');
    }
    const editaProducto = (id) => {
        navigate(`/admin/editarProducto/${id}`);
    }

    const productos = ProductoArray;
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
                        <TableRow>ID</TableRow>
                        <TableRow>NOMBRE</TableRow>
                        <TableRow>PRECIO</TableRow>
                        <TableRow>MARCA</TableRow>
                        <TableRow></TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map(producto => (
                            <TableRow key={producto.key}>
                                <TableCell>{producto.key}</TableCell>
                                <TableCell>{producto.titulo}</TableCell>
                                <TableCell>{producto.price}</TableCell>
                                <TableCell>{producto.marca}</TableCell>
                                <TableCell>
                                    <Button
                                        variant='contained' 
                                        color='primary'
                                        onClick={() => editaProducto(producto.key)}
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
        </Container>
    );
};

export default ListaProductos;