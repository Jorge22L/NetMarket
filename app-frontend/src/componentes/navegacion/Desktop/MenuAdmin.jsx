import React, { useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Group, ShoppingCart, Storefront } from '@mui/icons-material';

const MenuAdmin = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    return (
        <>

            <Button color="inherit" className={classes.buttonIcon} onClick={handleClick}>
                <div className={classes.linkAppBarDesktop}>
                    <Icon className={classes.adminBar}><AdminPanelSettingsIcon /></Icon>
                    Admin
                    <Icon className={classes.appBarDesktop}><KeyboardArrowDown /></Icon>
                </div>
            </Button>
            <Menu
                elevation={2}
                anchorEl={anchorEl}
                getcontentanchorel={null}
                anchorOrigin={({ vertical: 'bottom', horizontal: 'center' })}
                transformOrigin={({ vertical: 'top', horizontal: 'center' })}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/usuarios">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon><Group /></Icon>
                        </ListItemIcon>
                        <ListItemText>Usuarios</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/listaProductos">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon><Storefront /></Icon>
                        </ListItemIcon>
                        <ListItemText>Productos</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/listaPedidos">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon><ShoppingCart /></Icon>
                        </ListItemIcon>
                        <ListItemText>Pedidos</ListItemText>
                    </Link>
                </MenuItem>
            </Menu>

        </>
    );
};

export default MenuAdmin;