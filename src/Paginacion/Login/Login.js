import Header from "../../Esquema/Header.js";
import Footer from "../../Esquema/Footer";
import IconUsuario from "./assets/username-icon.svg";
import IconPassword from "./assets/password-icon.svg";
import IconGoogle from "./assets/google-icon.svg";
import IconFacebook from "./assets/facebook-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
// import './Login.css';


import Alert from '../Validaciones/Alerts/Alert.js';


import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

import { auth } from "./firebase.js";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };
  const closeAlert = () => {
    setAlert(null);
  };

  const handleGoogle = async (event) => {
    const provider = new GoogleAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      // console.log(credentials.user)
      const data = credentials.user;
      // console.log(data)
      const user = { usuario: data.displayName, correo: data.email, id: data._id, tipo: data.typeUser, foto: data.photoURL };
      // console.log(user)
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/error', { state: user })
    } catch (error) {
      console.log(error)
    }
  }

  const handleFacebook = async (event) => {
    const provider = new FacebookAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      // console.log(credentials.user)
      const data = credentials.user;
      // console.log(data)
      const user = { usuario: data.displayName, correo: data.email, id: data._id, tipo: data.typeUser, foto: data.photoURL };
      // console.log(user)
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/panel', { state: user })
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (event) => {
    // Validación de campos vacíos
    event.preventDefault();
    try {
      if (!correo || !password) {
        showAlert('danger', 'Por favor, ingresa todos los campos.');
        return;
      }
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correoElectronico: correo, contraseña: password }),
      });
      // console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        showAlert('danger', errorData.msg);
        return;
      }

      const userData = await response.json();
      // console.log(userData)

      sessionStorage.setItem('userData', JSON.stringify(userData));

      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/mfa', { state: userData });
    } catch (error) {
      // Manejar errores de red o conexión aquí...
      console.error('Error de red o conexión:', error.message);
      let alertType = 'danger';
      let errorMessage = 'Error de red o conexión. Por favor, verifica tu conexión a Internet.';
      showAlert(alertType, errorMessage);
    }
  };


  return (
    <div>
      <Header />
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Iniciar sesión</h5>
                      <p class="text-center small">Ingrese su nombre de usuario y contraseña para iniciar sesión</p>
                    </div>

                    <form onSubmit={handleLogin} class="row g-3 needs-validation">

                      <div class="col-12">
                        <label class="form-label">Correo electrónico:</label>
                        <div className="input-group has-validation">
                          <img
                            src={IconUsuario}
                            alt="username-icon"
                            style={{ height: '2.5rem', pointerEvents: 'none' }}
                            className=" input-group-text bg-info"
                          />
                          <input
                            className="form-control bg-light"
                            type="email"
                            placeholder="Ingresa su correo"
                            name="email"
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)} />
                          <div class="invalid-feedback">Por favor, ingrese su nombre de usuario.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label class="form-label">Contraseña:</label>
                        <div class="input-group has-validation">
                          <img
                            src={IconPassword}
                            alt="username-icon"
                            style={{ height: '2.5rem', pointerEvents: 'none' }}
                            className=" input-group-text bg-info"
                          />
                          <input
                            className="form-control bg-light"
                            type={mostrarContrasena ? 'text' : 'password'}
                            placeholder="Ingrese su contraseña"
                            name="password"
                            // minLength="8"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                          />
                          <i
                            className={`mt-2 ms-2 show-password-icon ${mostrarContrasena ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
                            onClick={toggleMostrarContrasena}
                          />
                        </div>
                        <div class="invalid-feedback">¡Por favor, introduzca su contraseña!</div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary w-100" >Acceso</button>
                      </div>
                      {alert && alert.type === 'danger' && (
                        <Alert type="danger" message={alert.message} onClose={closeAlert} />
                      )}

                    </form>

                    <div className="my-3">
                      <div class="col-12">
                        <p class="small mb-0">¿No tienes cuenta? <Link to="/registro">Crea una cuenta</Link></p>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">¿Contraseña Olvidada? <Link to="/recuperacion">Recupera tu cuenta</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Login;