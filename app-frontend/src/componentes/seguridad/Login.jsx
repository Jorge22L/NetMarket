import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";

const Login = () =>{
    const classes = useStyles();

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
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb} >
                                    <TextField 
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridmb}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="primary"
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