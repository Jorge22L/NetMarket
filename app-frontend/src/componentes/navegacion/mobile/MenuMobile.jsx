import { useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Avatar, Collapse, Divider, Icon, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AdminPanelSettings, ExitToApp, Group, KeyboardArrowDown, Person, ShoppingCart, Storefront } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../../contexto/store';

const MenuMobile = ({ clickHandler }) => {
    const imagenDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const navigate = useNavigate();
    const classes = useStyles();

    const [{sesionUsuario}, dispatch] = useStateValue();

    const [openCliente, setOpenCliente] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () => {
        setOpenCliente(!openCliente);
    }

    const handleClickAdmin = () => {  
        setOpenAdmin(!openAdmin);
    }

    const cerrarSesion = () =>{
        clickHandler();
        localStorage.removeItem("token");
        dispatch({
            type: "CERRAR_SESION",
            nuevoUsuario: null,
            autenticado: false
        });

        navigate("/login");

    }

    return (
        <>
            <ListItemButton onClick={handleClickCliente} className={classes.listItem}>
                <div className={classes.linkAppBarMobile}>
                    <Avatar
                        alt="mi imagen"
                        className={classes.avatarPerfilAppBar}
                        src={sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.imagen : imagenDefault) : imagenDefault} 
                        />
                    <ListItemText>{sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + " " + sesionUsuario.usuario.apellido : "INVITADO")  : "INVITADO"}</ListItemText>
                    <Icon><KeyboardArrowDown /></Icon>
                </div>
            </ListItemButton>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemButton className={classes.listSubItem} onClick={clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon><Person /></Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </ListItemButton>
                    <ListItemButton className={classes.listSubItem} onClick={cerrarSesion}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon><ExitToApp /></Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar Sesión</ListItemText>
                        </Link>
                    </ListItemButton>
                    <Divider />
                </List>
            </Collapse>
            {/* Inicio Admin */}
            <ListItemButton onClick={handleClickAdmin} className={classes.listItem}>
                <div className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon><AdminPanelSettings /></Icon>
                    </ListItemIcon>
                    <ListItemText>Administrador</ListItemText>
                    <Icon><KeyboardArrowDown /></Icon>
                </div>
            </ListItemButton>
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemButton className={classes.listSubItem} onClick={clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/usuarios">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon><Group /></Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </ListItemButton>
                    <ListItemButton className={classes.listSubItem} onClick={clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon><Storefront /></Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </ListItemButton>
                    <ListItemButton className={classes.listSubItem} onClick={clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listaPedidos">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon><ShoppingCart /></Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </ListItemButton>
                    <Divider />
                </List>
            </Collapse>
            {/* Fin Admin */}
            <ListItemButton className={classes.listItem} onClick={clickHandler}>
                <Link className={classes.linkAppBarMobile} to="/carrito">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon><ShoppingCart /></Icon>
                    </ListItemIcon>
                    <ListItemText>Mis Pedidos</ListItemText>
                </Link>
            </ListItemButton>
        </>
    );
};

export default MenuMobile;