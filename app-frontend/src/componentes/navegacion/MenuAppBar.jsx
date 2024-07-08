import { AppBar, Container, Drawer, Icon, IconButton, List, Toolbar, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Link as RouterLink } from 'react-router-dom';
import MenuCliente from './Desktop/MenuCliente';
import MenuAdmin from './Desktop/MenuAdmin';
import MenuMobile from './mobile/MenuMobile';
import MenuMobilePublic from './mobile/MenuMobilePublic';
import MenuPublic from './Desktop/MenuPublic';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openToggle = () => {
        setOpen(!open);
    }
    const closeToggle = () => {
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
                                    {/* <MenuMobilePublic openToggle={closeToggle} /> */}
                                    <MenuMobile clickHandler={closeToggle} />
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <RouterLink to={'/'} color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.appBarDesktop} fontSize="large"><StoreIcon/></Icon>
                                <Typography variant="h5">NetMarket</Typography>
                            </RouterLink>
                        </div>
                        <div className={classes.sectionDesktop}>
                            {/* <MenuPublic /> */}
                            <MenuCliente />
                            <MenuAdmin />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
     );
}
 
export default MenuAppBar;