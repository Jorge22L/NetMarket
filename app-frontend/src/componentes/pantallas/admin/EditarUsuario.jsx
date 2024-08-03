import { useEffect, useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { agregarRol, getUsuarioById } from '../../../actions/UsuarioAction';
import { useNavigate, useParams } from 'react-router-dom';
import { useStateValue } from '../../../contexto/store';

const EditarUsuario = () => {
    const id = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
    })

    const [{sesionUsuario}, dispatch] = useStateValue();

    const [admin, setAdmin] = useState(false)

    const handleChange = (e) => {
        setAdmin(e.target.checked);
    }

    useEffect(() => {
        const getUsuarioIdAsync = async () => {
            const response = await getUsuarioById(id)
            setAdmin(response.admin);
            setUsuario(response);
        }

        getUsuarioIdAsync();
    }, [])

    const actualizarRolUsuario = async (e) => {
        e.preventDefault();
        const rol = {
            nombre: "ADMIN",
            status: admin
        };

        const response = await agregarRol(id, rol, dispatch);

        if(response.status === 200){
            navigate('/admin/usuarios');
        }
        else{
            dispatch({
                type: "OPEN_SNACKBAR",
                openMensaje:{
                    open: true,
                    mensaje: "Error al actualizar el usuario"
                }
            })
        }
    }
    
    const classes = useStyles();
    return (
        <Container className={classes.containermt_white}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant='h4' className={classes.text_carrito}>
                        Editar usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            label="Nombre"
                            variant='filled'
                            fullWidth
                            disabled
                            value={usuario.nombre + " " + usuario.apellido}
                            className={classes.gridmb} />
                        <TextField
                            label="Email"
                            variant='filled'
                            value={usuario.email}
                            fullWidth
                            disabled
                            className={classes.gridmb} />
                        <FormControl className={classes.checkbox}>
                            <FormControlLabel 
                                control={<Checkbox color={'primary'} />}
                                label="Es Admininistrador"
                                checked={admin}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Button 
                            variant='contained' 
                            color='primary'
                            onClick={actualizarRolUsuario}
                            >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarUsuario;