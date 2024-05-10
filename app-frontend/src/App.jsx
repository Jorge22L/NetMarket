import { useState } from 'react'
import Login from './componentes/seguridad/Login'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario'
import MenuAppBar from './componentes/navegacion/MenuAppBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Productos from './componentes/pantallas/Productos'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registrar' element={<RegistrarUsuario />} />
          <Route exact path='/' element={<Productos />} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  )
}

export default App
