import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/UsuarioAction";
import { useStateValue } from "../../contexto/store";

const clearUsuario = {
    email: '',
    password: '',
}

const Login = () =>{
    const [{sesionUsuario}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const classes = useStyles();
    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prev =>({ 
            ...prev, 
            [name]: value 
        }));
    }

    const loginUsuario = () => {
        login(usuario, dispatch).then(response => {
            if(response.status === 200)
            {
                window.localStorage.setItem('token', response.data.token);
                console.log("Login existoso: ",response.data);
                navigate('/');
            }
            else{
                console.log("Login fallido: ",response.data);
            }
        })
    }

    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar}>
                            <Icon><PersonIcon  className={classes.icon}/></Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Ingrese su usuario</Typography>
                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField 
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb} >
                                    <TextField 
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        onClick={loginUsuario}
                                        >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link 
                                to="/registrar"
                                variant="body1"
                                className={classes.link}
                            >
                                ¿No tienes cuenta?, Registrate
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;