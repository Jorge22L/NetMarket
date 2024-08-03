import useStyles from '../../theme/useStyles';
import { Avatar, Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImageUploader from 'react-images-upload';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../contexto/store';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { actualizarUsuario } from '../../actions/UsuarioAction';

const Perfil = () => {
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const imagenDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    const [usuario, setUsuario] = useState({
        id: "",
        nombre: "",
        apellido: "",
        imagen: "",
        email: "",
        password: "",
        file: "",
        imagenTemporal: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((anterior) => ({
            ...anterior,
            [name]: value
        }))
    }

    useEffect(() => {
        if (sesionUsuario) {
            setUsuario(sesionUsuario.usuario);
        }
    }, [sesionUsuario])

    const subirImagen = (imagen) => {
        let foto = imagen[0];
        let fotoUrl = "";

        try {
            fotoUrl = URL.createObjectURL(foto);
        }
        catch (e) {
            console.log(e);
        }

        setUsuario((anterior) => ({
            ...anterior,
            file: foto,
            imagenTemporal: fotoUrl
        }));
    }

    const guardarUsuario = (e) => {
        e.preventDefault();
        
        actualizarUsuario(sesionUsuario.usuario.id, usuario, dispatch)
            .then(response => {
                if (response.status === 200) {
                    window.localStorage.setItem("token", response.data.token);
                    navigate("/");
                }
                
            })
            .catch(error => {
                console.log(error);
                console.log("usuario: ", usuario);
                dispatch({
                    type: "OPEN_SNACKBAR",
                    openMensaje: {
                        open: true,
                        mensaje: "Error al actualizar el usuario"
                    }
                });
                
            })
            
    }
    const keyImage = uuidv4();
    const classes = useStyles();
    const navigate = useNavigate();
    const verDetalles = () => {
        const id = "12345";
        navigate(`/ordenCompra/${id}`);
    }
    return (
        <Container className={classes.perfilSection}>
            <Grid container spacing={2}>
                <Grid item md={3} sm={12} xs={12}>
                    <Typography variant="h5" className={classes.text_carrito}>
                        Perfil de Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12} className={classes.flexgrid}>
                                <Avatar alt='mi perfil'
                                    className={classes.avatarPerfil}
                                    src={usuario.imagenTemporal ? usuario.imagenTemporal : (usuario.imagen ? usuario.imagen : imagenDefault)}
                                />

                                <ImageUploader
                                    withIcon={false}
                                    onChange={subirImagen}
                                    className={classes.imageUploaderPerfil}
                                    buttonText="Seleccionar imagen"
                                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                    maxFileSize={5242880}
                                />
                            </Grid>
                        </Grid>

                        <TextField variant='outlined' name='nombre' label='Nombre' fullWidth className={classes.gridmb} value={usuario.nombre} onChange={handleChange} />
                        <TextField variant='outlined' name='apellido' label='Apellido' fullWidth className={classes.gridmb} value={usuario.apellido} onChange={handleChange} />
                        <TextField variant='outlined' name='email' label='Email' fullWidth className={classes.gridmb} value={usuario.email} onChange={handleChange} />

                        <Divider className={classes.divider} />
                        <TextField type='password' variant='outlined' name='password' label='Password' fullWidth className={classes.gridmb} onChange={handleChange} />
                        <TextField type='password' variant='outlined' label='Confirmar Password' fullWidth className={classes.gridmb} />
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            onClick={guardarUsuario}
                        >
                            Actualizar
                        </Button>
                    </form>

                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <Typography variant='h5' className={classes.text_carrito}>
                        Mis Pedidos
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>FECHA</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAGADO</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>12345</TableCell>
                                    <TableCell>2024-12-15</TableCell>
                                    <TableCell>60.00</TableCell>
                                    <TableCell>
                                        <Icon className={classes.iconDelivered}>
                                            <CheckIcon />
                                        </Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant='contained'
                                            onClick={verDetalles}>
                                            DETALLES
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

export default Perfil;