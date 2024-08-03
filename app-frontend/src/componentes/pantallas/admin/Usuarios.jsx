import {Delete, Edit } from '@mui/icons-material';
import useStyles from '../../../theme/useStyles';
import { Button, Container, Icon, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsuarios } from '../../../actions/UsuarioAction';

const Usuarios = () => {
    const [requestUsuarios, setRequestUsuarios] = useState({
        pageIndex: 0,
        pageSize: 10,
        search: ""
    });

    const [paginadorUsuarios, setPaginadorUsuarios] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestUsuarios((anterior) => ({
            ...anterior,
            pageIndex: value
        }))
    }

    useEffect(() => {
        const getListaUsuarios = async () => {
            const response = await getUsuarios(requestUsuarios);
            setPaginadorUsuarios(response);
        }

        getListaUsuarios();
    }, [requestUsuarios]);

    const classes = useStyles();
    const navigate = useNavigate();
    const editaUsuario = (id) => {
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
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>USERNAME</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            paginadorUsuarios.data.map( (usuario) => (
                                <TableRow key={usuario.id}>
                                    <TableCell>{usuario.id}</TableCell>
                                    <TableCell>{usuario.nombre + ' ' + usuario.apellido}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>{usuario.username}</TableCell>
                                    <TableCell>
                                        <Button variant='contained' color='primary' onClick={() => editaUsuario(usuario.id)}>
                                            <Icon><Edit className={classes.iconSize} /></Icon>
                                        </Button>
                                        <Button variant='contained' color='secondary'>
                                            <Icon><Delete className={classes.iconSize} /></Icon>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        
                        
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={paginadorUsuarios.pageCount}
                page={requestUsuarios.pageIndex}
                onChange={handleChange}
                 />
        </Container>
    );
};

export default Usuarios;