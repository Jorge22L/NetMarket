import React, { useEffect, useState } from 'react';
import useStyles from "../../theme/useStyles";
import { Button, Card, Container, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { agregarLibro, editarLibro, eliminarLibro, listarLibros, obtenerLibroKey } from '../data/libros';

const clearLibro = {
    categoria: '',
    titulo: '',
    autor: '',
}
const Libro = () => {
    const [libro, setLibro] = useState({
        categoria: '',
        titulo: '',
        autor: '',
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLibro({ 
            ...libro, 
            [name]: value 
        });
    }

    const guardarData = () => {
        agregarLibro(libro);
        setLibro(clearLibro);
    }

    const listarDataLibros = () => {
        const data = listarLibros();
        setLibrosArray(data);
    }

    const [librosArray, setLibrosArray] = useState([]);

    useEffect(() => {
        listarDataLibros();
    }, [librosArray.length]);	

    const editarData = () => {
        const nuevaData = editarLibro(libroEdita);
        console.log('datos de edición: ', nuevaData);
        cerrarDialogo();

    }

    const abrirDialogo = (key) => {
        console.log('abrir');
        setOpen(true);
        const dataLibro = obtenerLibroKey(key);
        setLibroEdita({
            key: dataLibro.key,
            categoriaE: dataLibro.categoria,
            tituloE: dataLibro.titulo,
            autorE: dataLibro.autor
        })
        
    }

    const eliminarData = (data) => {
        console.log('eliminar');
        const nuevaData = eliminarLibro(data);
        setLibrosArray(nuevaData);
    }

    const [libroEdita, setLibroEdita] = useState({
        key: 0,
        categoriaE: '',
        tituloE: '',
        autorE: '',
    });

    const handleChangeEdita = (e) => {
        const { name, value } = e.target;
        setLibroEdita({ 
            ...libroEdita, 
            [name]: value 
        });
    }

    const [open, setOpen] = useState(false);
    
    const cerrarDialogo = () => {
        setOpen(false);    
    }

    const classes = useStyles();
    return ( 
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center">
                        <Typography variant="h4" color="primary">Libros</Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} className={classes.gridmb}>
                                    <TextField
                                        select
                                        label="Categoria"
                                        variant="outlined"
                                        fullWidth
                                        align="left"
                                        name='categoria'
                                        value={libro.categoria}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Programacion">Programación</MenuItem>
                                        <MenuItem value="Historia">Historia</MenuItem>
                                        <MenuItem value="Matematica">Matemática</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6} className={classes.gridmb}>
                                    <TextField
                                        label="Titulo"
                                        variant="outlined"
                                        fullWidth
                                        name="titulo"
                                        value={libro.titulo}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} className={classes.gridmb}>
                                    <TextField
                                        label="Autor"
                                        variant="outlined"
                                        fullWidth
                                        name="autor"
                                        value={libro.autor}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} className={classes.gridmb}>
                                    <Button
                                        variant='contained'
                                        fullWidth
                                        color='primary'
                                        type='submit'
                                        onClick={guardarData}
                                    >
                                        Guardar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>

            <TableContainer component={Paper} className={classes.containermt}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Categoria</TableCell>
                            <TableCell align="center">Título</TableCell>
                            <TableCell align="center">Autor</TableCell>
                            <TableCell align="center" colSpan={2}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { librosArray.map((libroObj) => (
                            <TableRow key={libroObj.key}>
                            <TableCell align="center">{libroObj.categoria}</TableCell>
                            <TableCell align="center">{libroObj.titulo}</TableCell>
                            <TableCell align="center">{libroObj.autor}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => abrirDialogo(libroObj.key)}
                                >
                                    Editar
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => eliminarData(libroObj)}
                                >
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>    
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={cerrarDialogo} maxWidth="xs"
            fullWidth align="center">
                <DialogTitle>Editar Libro</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            select
                            label="Categoria"
                            variant="outlined"
                            className={classes.gridmb}
                            fullWidth
                            align="left"
                            name='categoriaE'
                            value={libroEdita.categoriaE}
                            onChange={handleChangeEdita}
                                    >
                                        <MenuItem value="Programacion">Programación</MenuItem>
                                        <MenuItem value="Historia">Historia</MenuItem>
                                        <MenuItem value="Matematica">Matemática</MenuItem>
                        </TextField>
                        <TextField
                            label="Titulo"
                            variant="outlined"
                            className={classes.gridmb}
                            fullWidth
                            name="tituloE"
                            value={libroEdita.tituloE}
                            onChange={handleChangeEdita}
                        />
                        <TextField
                            label="Autor"
                            variant="outlined"
                            className={classes.gridmb}
                            fullWidth
                            name="autorE"
                            value={libroEdita.autorE}
                            onChange={handleChangeEdita}
                        />
                        <Button
                            variant='contained'
                            fullWidth
                            color='primary'
                            className={classes.gridmb}
                            type='submit'
                            onClick={editarData}
                        >
                            Guardar
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
     );
}
 
export default Libro;