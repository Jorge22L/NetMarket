import { Check, Delete, Edit } from '@mui/icons-material';
import useStyles from '../../../theme/useStyles';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Usuarios = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const editaUsuario = () => {
        const id = 12345;
        navigate(`/admin/usuarios/${id}`);
    }
    return (
        <Container className={classes.containermt_white}>
            <Typography variant='h4' className={classes.text_carrito}>
                Usuarios
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>12345</TableCell>
                            <TableCell>John Peralta</TableCell>
                            <TableCell>email@mail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.icon}><Check /></Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary'>
                                    <Icon><Edit className={classes.iconSize} /></Icon>
                                </Button>
                                <Button variant='contained' color='secondary'>
                                    <Icon><Delete className={classes.iconSize} /></Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>54321</TableCell>
                            <TableCell>Jose Perez</TableCell>
                            <TableCell>email@mail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.icon}><Check /></Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' onClick={editaUsuario}>
                                    <Icon><Edit className={classes.iconSize} /></Icon>
                                </Button>
                                <Button variant='contained' color='secondary'>
                                    <Icon><Delete className={classes.iconSize} /></Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuarios;