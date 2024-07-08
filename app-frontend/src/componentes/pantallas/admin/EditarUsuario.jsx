import useStyles from '../../../theme/useStyles';
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

const EditarUsuario = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt_white}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant='h4' className={classes.text_carrito}>
                        Editar usuario
                    </Typography>
                    <form obSubmit={(e) => e.preventDefault()}>
                        <TextField
                            label="Nombre"
                            variant='filled'
                            fullWidth
                            disabled
                            className={classes.gridmb} />
                        <TextField
                            label="Email"
                            variant='filled'
                            value="email@mail.com"
                            fullWidth
                            disabled
                            className={classes.gridmb} />
                        <FormControl className={classes.checkbox}>
                            <FormControlLabel 
                                control={<Checkbox color={'primary'} />}
                                label="Es Admin"
                            />
                        </FormControl>
                        <Button 
                            variant='contained' 
                            color='primary'>
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarUsuario;