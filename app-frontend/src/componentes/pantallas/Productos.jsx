import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import useStyles from '../../theme/useStyles';
import React from 'react';
import { ProductoArray } from '../data/data_prueba';

const Productos = () => {
    const classes = useStyles();
    const miArray = ProductoArray;

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                Productos
            </Typography>

            <Grid container spacing={4}>
            { miArray.map(data => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={data.key}>
                    
                    <Card>
                        <CardMedia image="https://publiventa.pe/wp-content/uploads/2017/07/6T.png" 
                        title="Mi producto" className={classes.media}>
                            <Avatar variant='square' className={classes.price}>${data.price}</Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h5' className={classes.text_card}>
                                {data.titulo}
                            </Typography>
                            <Button variant='contained' color='primary' fullWidth>
                                Más detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Productos;