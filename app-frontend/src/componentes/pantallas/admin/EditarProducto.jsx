import useStyles from '../../../theme/useStyles';
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactImageUploadComponent from 'react-images-upload';
import { useNavigate, useParams } from 'react-router-dom';
import { actualizarProducto, getProducto } from '../../../actions/ProductoActions';
import { v4 as uuidv4 } from 'uuid';

const EditarProducto = () => {
    const id = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState({
        id: 0,
        nombre: '',
        descripcion: '',
        stock: 0,
        marcaId: 0,
        categoriaId: 0,
        precio: 0.0,
        imagen: '',
        file: ""
    });

    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleMarcaChange = (event) => {
        setMarca(event.target.value)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProducto((anterior) => ({
            ...anterior,
            [name]: value
        }));
    }

    const subirImagen = (imagen) => {
        const foto = imagen[0];
        setProducto((anterior) => ({
            ...anterior,
            file: foto
        }))
    }

    useEffect( () => {
        
        async function getProductoAsync() {
            const response = await getProducto(id);
            console.log("Response del servidor: ", response);
            setProducto(response);
            setCategoria(response.categoriaId);
            setMarca(response.marcaId);
            
        }
        getProductoAsync();
        
    },[id])

    const guardarProducto = async () => {
        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const resultado = await actualizarProducto(id, producto);
        console.log("resultado al guardar producto: ", resultado);
        navigate('/admin/listaProductos');
    }

    const keyImage = uuidv4();

    const classes = useStyles();
    return (
        <Container className={classes.containermt_white}>
            <Grid container justifyContent={'center'}>
                <Grid item sm={6} xs={12}>
                    <Typography variant='h4' className={classes.text_carrito}>
                        Editar Producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField 
                            variant='outlined' 
                            label='Nombre del Producto' 
                            value={producto.nombre}
                            name='nombre'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='outlined' 
                            label='Precio'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                            onChange={handleChange}
                            name='precio'
                            value={producto.precio}
                        />
                        
                        <TextField
                            variant='outlined' 
                            label='Stock'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                            onChange={handleChange}
                            name='stock'
                            value={producto.stock}
                        />
                        <TextField
                            variant='outlined' 
                            label='Descripción'
                            fullWidth
                            multiline
                            rows={4}
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                            onChange={handleChange}
                            name='descripcion'
                            value={producto.descripcion}
                        />

                        <FormControl
                            className={classes.formControl}
                        >
                            <InputLabel id="marca-select-label">Marca</InputLabel>
                            <Select 
                                labelId="marca-select-label" 
                                id="marca-select" 
                                value={marca} 
                                onChange={handleMarcaChange}
                                
                                >
                                <MenuItem value={0}>-- Seleccione --</MenuItem>
                                <MenuItem value={1}>Nike</MenuItem>
                                <MenuItem value={2}>Adidas</MenuItem>
                                <MenuItem value={3}>Puma</MenuItem>
                                <MenuItem value={4}>Reebok</MenuItem>
                                <MenuItem value={5}>New Balance</MenuItem>
                                <MenuItem value={6}>Vans</MenuItem>
                                <MenuItem value={7}>Asics</MenuItem>
                                <MenuItem value={8}>Converse</MenuItem>
                                <MenuItem value={9}>Gucci</MenuItem>
                                <MenuItem value={10}>Fila</MenuItem>
                                <MenuItem value={11}>Timberland</MenuItem>

                            </Select>

                        </FormControl>
                        <FormControl
                            className={classes.formControl}
                        >
                            <InputLabel id="categoria-select-label">Categoria</InputLabel>
                            <Select 
                                labelId="categoria-select-label" 
                                id="categoria-select" 
                                value={categoria} 
                                onChange={handleCategoriaChange}

                                >
                                <MenuItem value={0}>-- Seleccione --</MenuItem>
                                <MenuItem value={1}>Ropa de Varones</MenuItem>
                                <MenuItem value={2}>Ropa de Mujeres</MenuItem>
                                <MenuItem value={3}>Ropa para Ninos</MenuItem>
                                <MenuItem value={4}>Trajes de Baño</MenuItem>
                                <MenuItem value={5}>Invierno</MenuItem>
                                <MenuItem value={6}>Verano</MenuItem>

                            </Select>

                        </FormControl>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ReactImageUploadComponent 
                                    singleImage={true}
                                    key={keyImage}
                                    withIcon={true}
                                    buttonText='Buscar Imagen'
                                    onChange={subirImagen}
                                    imgExtension={['.jpg', '.png', '.jpeg', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar
                                    variant='square'
                                    className={classes.avatarProducto}
                                    src={producto.imagen ? producto.imagen : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                                 />
                            </Grid>
                        </Grid>
                        <Button 
                            variant='contained'
                            color='primary'
                            onClick={guardarProducto}
                        >
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarProducto;