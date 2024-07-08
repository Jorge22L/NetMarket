import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import useStyles from '../../../theme/useStyles';
import ReactImageUploadComponent from 'react-images-upload';

const AgregarProducto = () => {
    const classes = useStyles();
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
                            InputLabelProps={{shrink: true}}
                        />
                        <TextField
                            variant='outlined' 
                            label='Precio'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                        />
                        <TextField
                            variant='outlined' 
                            label='Marca'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                        />
                        <TextField
                            variant='outlined' 
                            label='Stock'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                        />
                        <TextField
                            variant='outlined' 
                            label='Descripción'
                            fullWidth
                            className={classes.gridmb}
                            InputLabelProps={{shrink: true}}
                        />
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ReactImageUploadComponent 
                                    withIcon={true}
                                    buttonText='Buscar Imagen'
                                    onChange={(image) => console.log(image)}
                                    imgExtension={['.jpg', '.png', '.jpeg', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar
                                    variant='square'
                                    className={classes.avatarProducto}
                                 />
                            </Grid>
                        </Grid>
                        <Button 
                            variant='contained'
                            color='primary'
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