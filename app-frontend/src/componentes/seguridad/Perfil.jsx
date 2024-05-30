import React from 'react';
import useStyles from '../../theme/useStyles';
import { Avatar, Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImageUploader from 'react-images-upload';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
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
                        <ImageUploader
                            withIcon={false}
                            buttonStyles={{ borderRadius: "50%", padding: 10, margin: 0, position: "absolute", bottom: 15, left: 15 }}
                            className={classes.imageUploader}
                            buttonText={<Icon><AddAPhotoIcon /></Icon>}
                            label={<Avatar alt='mi perfil' className={classes.avatarPerfil}
                                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                        />

                        <TextField variant='outlined' label='Nombre' fullWidth className={classes.gridmb} value={"JORGE"} />
                        <TextField variant='outlined' label='Apellido' fullWidth className={classes.gridmb} value={"PEREZ"} />
                        <TextField variant='outlined' label='Email' fullWidth className={classes.gridmb} value={"QpWJZ@example.com"} />

                        <Divider className={classes.divider} />
                        <TextField variant='outlined' label='Password' fullWidth className={classes.gridmb} />
                        <TextField variant='outlined' label='Confirmar Password' fullWidth className={classes.gridmb} />
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
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