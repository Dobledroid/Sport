import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Index from './Index';

import Header from '../Esquema/Header';
import Footer from '../Esquema/Footer';

import Productos from './Productos/Productos';
import Example from './Productos/Example';

import Filtros from './Productos/Filtros';
import Productos2 from './Productos/Productos2';
// import Producto from './Productos/Producto';
// import Producto2 from './Productos/Producto2';
// import Carrito from './Productos/Carrito';
import PrivacyPolicy from './Empresa/Privacidad/PrivacyPolicy';
import Terminos from './Empresa/TerminosCondiciones/TerminosCondiciones';
import CookiePolicy from './Empresa/Cookies/CookiePolicy';
import Contacto from './Empresa/Contacto/Contacto';
import Nosotros from './Empresa/Nosotros/Nosotros';

import Registro from './Registro/Registro';
import Login from './Login/Login';
import Login2 from './Login/Login2';
import MFA from './Login/MFA';
import Perfil from './Perfil/Perfil';
// import IndexCargaRapida from './Accesibilidad/CargaRapida/IndexCargaRapida';
// import TerminosCondicionesH from './Accesibilidad/CargaRapida/TerminosCondiciones/TerminosCondicionesH';
// import TextToSpeech from './Accesibilidad/Visual/TextToSpeech';
// import MenuAccessible from './Accesibilidad/Visual/MenuAccesible';
// import CookiePolicyV from './Accesibilidad/Visual/Cookies/CookiePolicyV';
import Recuperacion from './Recuperacion/Recuperacion';
import Token from './Recuperacion/Token';
// import EmailSender from './email/EmailSender';
import ResetPassword from './Recuperacion/ResetPassword';

import Sidebar from './Sidebar/Sidebar';
// import ActiveLastBreadcrumb from "../ActiveLastBreadcrumb";

// import ProductosComponent from './Productos/ProductosComponent';
import AdmProductos from './Administracion/Productos/AdmProductos';
import AgregarProducto from './Administracion/Productos/AgregarProducto';
import EditarProducto from './Administracion/Productos/EditarProducto';
// import Header2 from '../Esquema/Headerq';
// import Bodys from '../Esquema/Bodys';


import ApiDataDisplay from './Administracion/Usuarios/ApiDataDisplay';

import Error404 from './Validaciones/Error404/Error404';
// import Error500 from './Validaciones/Error500/Error500';


import subirImagen from './Administracion/Productos/subirImagen';
import MapComponent from './Validaciones/MapComponent/MapComponent';
// import Error from './Validaciones/Error404/Error';
const Rutas = () => {
  return (
    <>
      {/* <ActiveLastBreadcrumb /> */}

      <Routes>
        <Route path='/' Component={Index}></Route>

        <Route path='/header' Component={Header}></Route>
        <Route path='/footer' Component={Footer}></Route>

        <Route path='/tienda' Component={Productos}></Route>
        <Route path='/example' Component={Example}></Route>
        <Route path='/filtros' Component={Filtros}></Route>
        <Route path='/productos2' Component={Productos2}></Route>

        <Route path='/privacidad' Component={PrivacyPolicy}></Route>
        <Route path='/terminos-y-condiciones' Component={Terminos}></Route>
        <Route path='/cookies' Component={CookiePolicy}></Route>
        <Route path='/contacto' Component={Contacto}></Route>
        <Route path='/nosotros' Component={Nosotros}></Route>

        <Route path='/registro' Component={Registro}></Route>
        <Route path='/login' Component={Login}></Route>

        <Route path='/mfa' Component={ MFA }></Route>
        <Route path='/perfil' Component={ Perfil }></Route>

        <Route path='/si' Component={ Sidebar }></Route>

        <Route path='/login2' Component={ Login2 }></Route>
        <Route path='/recuperacion' Component={Recuperacion}></Route>
        <Route path='/validacion' Component={ Token }></Route>
        <Route path='/resetPassword' Component={ ResetPassword }></Route>
        
        <Route path='/AdmProductos' Component={AdmProductos}></Route>
        <Route path='/AgregarProducto' Component={AgregarProducto}></Route>
        <Route path='/EditarProducto' Component={EditarProducto}></Route>


        <Route path='/subirImagen' Component={ subirImagen }></Route>
        <Route path='/map' Component={ MapComponent }></Route>
        
        
        <Route path='/apiUser' Component={ ApiDataDisplay }></Route>

        <Route path='*' Component={ Error404 }></Route>
        {/* <Route path='/error-500' Component={ Error500 }></Route> */}


        {/* 
        <Route path='/e' Component={ Error }></Route> */}
        {/* <Route path='/'  Component={ Index} />
        <Route path='/privacidad' Component={ PrivacyPolicy  }></Route>
        <Route path='/terminos-y-condiciones' Component={ Terminos  }></Route>
        <Route path='/cookies' Component={ CookiePolicy  }></Route>
        <Route path='/tienda' Component={ Productos }></Route>
        <Route path='/producto' Component={ Producto }></Route>
        <Route path='/producto2' Component={ Producto2 }></Route>
        <Route path='/carrito' Component={ Carrito }></Route>
        <Route path='/contacto' Component={ Contacto }></Route>
        <Route path='/registro' Component={ RegitroUsuario }></Route>
        <Route path='/recuperacion' Component={ Recuperacion }></Route>
        <Route path='/nosotros' Component={ Nosotros }></Route> */}
        {/* <Route path='/conexion' Component={ Conexion  }></Route> */}
        {/* <Route path='/copia' Component={ Copia }></Route> */}
        {/* <Route path='/indexH' Component={ IndexCargaRapida }></Route>
        <Route path='/terminos-y-condicionesH' Component={ TerminosCondicionesH }></Route>
        <Route path='/t' Component={ TextToSpeech }></Route>
        <Route path='/menuVisual' Component={ MenuAccessible }></Route>
        <Route path='/cookiesV' Component={ CookiePolicyV }></Route>


        <Route path='/comp' Component={ ProductosComponent }></Route>
        <Route path='/ex' Component={ Example }></Route>
        <Route path='/header2' Component={ Header2 }></Route>
        <Route path='/b' Component={ Bodys }></Route>



 */}

      </Routes>
    </>
  )
}

export default Rutas