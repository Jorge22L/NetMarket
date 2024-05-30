import React, { useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const MenuCliente = () => {
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
            <Button color="inherit" className={classes.buttonIcon}>
                <Link className={classes.appBarDesktop} to="/carrito">
                    <Icon className={classes.mr}><ShoppingCartCheckoutIcon /></Icon>
                    Mis Pedidos
                </Link>

            </Button>
            <div>
                <Button color="inherit" className={classes.buttonIcon} onClick={handleClick}>
                   <div className={classes.linkAppBarDesktop}>
                       <Avatar
                            alt="mi perfil"
                            className={classes.avatarPerfilAppBar} 
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        />
                        Jose Perez
                        <Icon className={classes.appBarDesktop}><KeyboardArrowDownIcon /></Icon>
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
                            <Link className={classes.linkAppBarMobile} to="/perfil">
                                <ListItemIcon className={classes.listItemIcon}>
                                    <Icon><PersonIcon /></Icon>
                                </ListItemIcon>
                                <ListItemText>
                                    Mi Perfil
                                </ListItemText>
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.listItem} onClick={handleClose}>
                            <Link className={classes.linkAppBarMobile} to="/">
                                <ListItemIcon className={classes.listItemIcon}>
                                    <Icon><ExitToAppIcon /></Icon>
                                </ListItemIcon>
                                <ListItemText>
                                    Cerrar Sesión
                                </ListItemText>
                            </Link>
                        </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default MenuCliente;