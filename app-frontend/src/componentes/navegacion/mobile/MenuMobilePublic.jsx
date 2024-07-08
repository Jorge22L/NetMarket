import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Link as RouterLink } from 'react-router-dom';
import { Person, ShoppingCart } from '@mui/icons-material';

const MenuMobilePublic = (openToggle) => {
    const classes = useStyles();
    return (
        <>
            <ListItemButton onClick={openToggle} className={classes.listItem}>
                <RouterLink to={'/login'} className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon><Person /></Icon>
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                </RouterLink>
            </ListItemButton>
            <ListItemButton onClick={openToggle} className={classes.listItem}>
                <RouterLink to={'/carrito'} className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon><ShoppingCart /></Icon>
                    </ListItemIcon>
                    <ListItemText>Mis Pedidos</ListItemText>
                </RouterLink>
            </ListItemButton>
        </>
    );
};

export default MenuMobilePublic;