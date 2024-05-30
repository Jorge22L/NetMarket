import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProcesoCompra = () => {
    const [activeStep, setActiveStep] = useState(1);
    const navigate = useNavigate();
    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const regresarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const realizarPedido = () => {
        const idCompra = "12345";
        navigate(`/ordenCompra/${idCompra}`);
    }
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envío</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Método de Pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>
            </Stepper>
            {activeStep === 1 ? (
                <Grid item md={6} xs={12} className={classes.gridPC}>
                    <Typography variant='h6' className={classes.text_carrito}>
                        ENVIO DEL PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Dirección"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Ciudad"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Pais"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' color='primary' onClick={continuarProceso}>
                                    Continuar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            ) : activeStep === 2 ? (
                <Grid item lg={4} md={4} xs={12} className={classes.gridPC}>
                    <Typography variant='h6' className={classes.text_carrito}>
                        MÉTODO DE PAGO
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.FormControl}>
                                <FormLabel>Seleccione Método</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value={"Paypal"}
                                        control={<Radio color="primary" />}
                                        label={"Paypal"}
                                        onClick={continuarProceso} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.buttonAnterior}
                                onClick={regresarProceso}
                            >
                                Anterior
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={continuarProceso}>
                                Continuar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item xs={12} md={6} className={classes.gridLR}>
                        <Typography variant='h6' className={classes.text_carrito}>
                            Envío
                        </Typography>
                        <Typography variant='h6' className={classes.text_carrito}>
                            Dirección: Calle2, Ciudad2, Pais2
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant='h6' className={classes.text_carrito}>
                            Método de Pago
                        </Typography>
                        <Typography variant='h6' className={classes.text_carrito}>
                            Método: Paypal
                        </Typography>
                        <Typography variant='h6' className={classes.text_carrito}>
                            Productos
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia className={classes.imgProductoPC}
                                                image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png"
                                                title="Imagen" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_carrito}>Abrigo</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_carrito}>2 * $25.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={regresarProceso}>
                            ANTERIOR
                        </Button>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TableContainer component={Paper} square>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>Resumen del Pedido</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>Productos</Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>$50</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>Envio</Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>$2.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>Impuestos</Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>$8.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>Total</Typography>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <Typography variant='h6' className={classes.text_carrito}>$60.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Button variant='contained' color='primary'
                                                size='large'
                                                onClick={realizarPedido}>
                                                Realizar Perdido
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : null}
        </Container>
    );
};

export default ProcesoCompra;