import { Avatar, Container, Grid, Card, Icon, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";


const clearUsuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
}
const RegistrarUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ 
            ...usuario, 
            [name]: value 
        });
    }

    const guardarUsuario = () => {
        console.log('usuario', usuario);
        setUsuario(clearUsuario);
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
                                        label="Apellidos"
                                        variant="outlined"
                                        fullWidth
                                        name="apellidos"
                                        value={usuario.apellidos}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
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