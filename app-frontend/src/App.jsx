import Login from './componentes/seguridad/Login'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario'
import MenuAppBar from './componentes/navegacion/MenuAppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './componentes/pantallas/Productos'
import DetalleProducto from './componentes/pantallas/DetalleProducto'
import CarritoCompras from './componentes/pantallas/CarritoCompras'
import ProcesoCompra from './componentes/pantallas/ProcesoCompra'
import OrdenCompra from './componentes/pantallas/OrdenCompra'
import Perfil from './componentes/seguridad/Perfil'
import Usuarios from './componentes/pantallas/admin/Usuarios'
import EditarUsuario from './componentes/pantallas/admin/EditarUsuario';
import ListaProductos from './componentes/pantallas/admin/ListaProductos'
import AgregarProducto from './componentes/pantallas/admin/AgregarProducto'
import EditarProducto from './componentes/pantallas/admin/EditarProducto'
import ListaPedidos from './componentes/pantallas/admin/ListaPedidos'
import { useEffect, useState } from 'react'
import { getUsuario } from './actions/UsuarioAction'
import { useStateValue } from './contexto/store'
import { v4 as uuidv4 } from 'uuid'
import { getCarritoCompra } from './actions/CarritoCompraAction'
import { Snackbar } from '@mui/material'


function App() {
  const [{ sesionUsuario, openSnackBar }, dispatch] = useStateValue();
  const [serverResponse, setServerResponse] = useState(false);

  useEffect( () => {
    async function fetchData() {
      let carritoCompraId = window.localStorage.getItem('carrito');

      if(!carritoCompraId)
      {
        carritoCompraId = uuidv4();
        window.localStorage.setItem("carrito", carritoCompraId);

      }

      if(!serverResponse)
      {
      
          await getUsuario(dispatch);
          await getCarritoCompra(dispatch, carritoCompraId);
          setServerResponse(true);
      }
      
    }

    fetchData();
    
  }, [dispatch, serverResponse]);

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
        open={openSnackBar ? openSnackBar.open : false}
        autoHideDuration={3000}
        ContentProps={{"aria-describedby": "message-id"}}
        message={<span id="message-id">{openSnackBar ? openSnackBar.mensaje : ""}</span>}
        onClose={() => dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: "",
            }
          })
        }
      >

      </Snackbar>
      <Router>
        <MenuAppBar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registrar' element={<RegistrarUsuario />} />
          <Route exact path='/' element={<Productos />} />
          <Route exact path='/detalleProducto/:id' element={<DetalleProducto />} />
          <Route exact path='/carrito' element={<CarritoCompras />} />
          <Route exact path='/procesoCompra' element={<ProcesoCompra />} />
          <Route exact path='/ordenCompra/:id' element={<OrdenCompra />} />
          <Route exact path='/perfil' element={<Perfil />} />
          <Route exact path='/admin/usuarios' element={<Usuarios />} />
          <Route exact path='/admin/usuarios/:id' element={<EditarUsuario />} />
          <Route exact path='/admin/listaProductos' element={<ListaProductos />} />
          <Route exact path='/admin/agregarProducto' element={<AgregarProducto />} />
          <Route exact path='/admin/editarProducto/:id' element={<EditarProducto />} />
          <Route exact path='/admin/listaPedidos' element={<ListaPedidos />} />
        </Routes>
      </Router>
    </ThemeProvider>

  )
}

export default App
