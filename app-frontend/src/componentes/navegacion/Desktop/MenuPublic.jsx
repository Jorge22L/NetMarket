import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Icon } from '@mui/material';
import { Person, ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const MenuPublic = () => {
    const classes = useStyles();
    return (
        <>
            <Button color='inherit' className={classes.buttonIcon}>
                <RouterLink to={'/carrito'} className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}><ShoppingCart/></Icon>
                        Carrito
                    </RouterLink>
            </Button>
            <Button color='inherit' className={classes.buttonIcon}>
                <RouterLink to={'/login'} className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}><Person/></Icon>
                        Login
                    </RouterLink>
            </Button>
        </>
    );
};

export default MenuPublic;