import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Link as RouterLink } from 'react-router-dom';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openToggle = () => {
        setOpen(!open);
    }
    return ( 
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color='inherit' onClick={openToggle}>
                                <Icon fontSize='large'><MenuIcon/></Icon>
                            </IconButton>
                        </div>
                        <Drawer
                            open={open}
                            onClose={openToggle}
                        >
                            <div className={classes.list}>
                                <List>
                                    <ListItemButton onClick={openToggle} className={classes.listItem}>
                                        <RouterLink to={'/login'} color='inherit' className={classes.linkAppBarMobile} underline='none'>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon><PersonIcon/></Icon>
                                            </ListItemIcon>
                                            <ListItemText>Login</ListItemText>
                                        </RouterLink>
                                    </ListItemButton>
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <RouterLink to={'/'} color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.mr} fontSize="large"><StoreIcon/></Icon>
                                <Typography variant="h5">NetMarket</Typography>
                            </RouterLink>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Button color='inherit' className={classes.buttonIcon}>
                                <RouterLink to={'/login'} className={classes.linkAppBarDesktop} href="/login" color="inherit" underline="none">
                                    <Icon className={classes.mr}><PersonIcon/></Icon>
                                    Login
                                </RouterLink>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
     );
}
 
export default MenuAppBar;