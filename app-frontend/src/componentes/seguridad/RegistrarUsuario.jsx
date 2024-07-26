import { Avatar, Container, Grid, Card, Icon, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useStyles from "../../theme/useStyles";
import { Link, useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../actions/UsuarioAction";
import { useStateValue } from "../../contexto/store";


const clearUsuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    username: '',
}
const RegistrarUsuario = () => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        username: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ 
            ...usuario, 
            [name]: value 
        });
    }

    const guardarUsuario = () => {
        registrarUsuario(usuario, dispatch).then(response => {
            navigate('/');
            console.log(`Response del servidor al guardar usuario: `, response);
            window.localStorage.setItem('token', response.data.token);
        })
    }
    const classes = useStyles();
    return ( 
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}><PersonAddIcon /></Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Registro de usuario</Typography>

                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} className={classes.gridmb}>
                                    <TextField
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        name="nombre"
                                        value={usuario.nombre}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.gridmb}>
                                    <TextField
                                        label="Apellido"
                                        variant="outlined"
                                        fullWidth
                                        name="apellido"
                                        value={usuario.apellido}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.gridmb}>
                                    <TextField
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        name="username"
                                        value={usuario.username}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.gridmb}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name="email"
                                        value={usuario.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name="password"
                                        value={usuario.password}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <Button 
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        onClick={guardarUsuario}
                                        type="submit"
                                    >
                                        Registrar
                                    </Button>
                                </Grid>
                                
                            </Grid>
                            <Link
                                to="/login"
                                variant="body1"
                                className={classes.link}
                            >
                                ¿Ya tienes una cuenta?, Inicia sesión
                            </Link>
                        </form>
                    </Card>
                    
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default RegistrarUsuario;