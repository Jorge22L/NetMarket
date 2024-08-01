import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import useStyles from '../../../theme/useStyles';
import ReactImageUploadComponent from 'react-images-upload';
import { useState } from 'react';
import { registrarProducto } from '../../../actions/ProductoActions';
import { v4 as uuidv4 } from 'uuid';

const AgregarProducto = () => {
    const [producto, setProducto] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        stock: 0,
        marcaId: 0,
        categoriaId: 0,
        precio: 0.0,
        imagen: "",
        file: ""
    });
    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleMarcaChange = (event) => {
        setMarca(event.target.value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto((anterior) => ({
            ...anterior,
            [name]: value
        }));
    }

    const subirImagen = imagenes => {
        const foto = imagenes[0];
        setProducto((anterior) => ({
            ...anterior,
            file: foto
        }));
    }

    const guardarProducto = async () => {
        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const resultado = await registrarProducto(producto);

        console.log("resultado al guardar producto: ", resultado);
    }
    const classes = useStyles();

    const keyImage = uuidv4();
    return (
        <Container className={classes.containermt_white}>
            <Grid container justifyContent={'center'}>
                <Grid item sm={6} xs={12}>
                    <Typography variant='h4' className={classes.text_carrito}>
                        Agregar Producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField
                            variant='outlined'
                            label='Nombre del Producto'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{ shrink: true }}
                            name='nombre'
                            value={producto.nombre}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='outlined'
                            label='Precio'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{ shrink: true }}
                            name='precio'
                            value={producto.precio}
                            onChange={handleChange}
                        />

                        <TextField
                            variant='outlined'
                            label='Stock'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{ shrink: true }}
                            name='stock'
                            value={producto.stock}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='outlined'
                            label='Descripción'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{ shrink: true }}
                            name='descripcion'
                            value={producto.descripcion}
                            onChange={handleChange}
                            multiline
                            rows={4}
                        />

                        <FormControl className={classes.formControl}>
                            <InputLabel id='marca-select-label'>Marca</InputLabel>
                            <Select
                                labelId='marca-select-label'
                                id="marca-select"
                                value={marca}
                                onChange={handleMarcaChange}
                            >
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
                        <FormControl className={classes.formControl}>
                            <InputLabel id='categoria-select-label'>Categoria</InputLabel>
                            <Select
                                labelId='categoria-select-label'
                                id="categoria-select"
                                value={categoria}
                                onChange={handleCategoriaChange}
                            >
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
                                    withIcon={true}
                                    singleImage={true}
                                    key={keyImage}
                                    buttonText='Buscar Imagen'
                                    imgExtension={['.jpg', '.png', '.jpeg', '.gif']}
                                    maxFileSize={5242880}
                                    onChange={subirImagen}
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

export default AgregarProducto;