import Header from "../../Esquema/Header.js";
import Footer from "../../Esquema/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import IconPassword from "../Login/assets/password-icon.svg";
import Swal from 'sweetalert2';
import Alert from '../Validaciones/Alerts/Alert.js';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarConfirmContrasena, setMostrarConfirmContrasena] = useState(false);

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const validaciones = () => {
    const mayusculas = /[A-Z]/;
    const minusculas = /[a-z]/;
    const numeros = /\d/;
    const caracteres = /[!@#$%^&*()\-_=+{};:,<.>]/;

    const errors = [];

    if (!mayusculas.test(password)) {
      errors.push("La contraseña debe tener al menos una letra mayúscula.");
    }

    if (!minusculas.test(password)) {
      errors.push("La contraseña debe tener al menos una letra minúscula.");
    }

    if (!numeros.test(password)) {
      errors.push("La contraseña debe tener al menos un número.");
    }

    if (!caracteres.test(password)) {
      errors.push("La contraseña debe tener al menos un carácter especial.");
    }

    if (password !== confirmacion) {
      errors.push("Las contraseñas no coinciden.");
    }

    if (errors.length > 0) {
      const errorMessage = errors.join("\n");
      showAlert('danger', errorMessage);
      return false;
    } else {
      return true;
    }
  }

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const toggleMostrarConfirmContrasena = () => {
    setMostrarConfirmContrasena(!mostrarConfirmContrasena);
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const data = location.state;
      // console.log("data ", data)
      if (validaciones()) {
        const response = await fetch(`http://localhost:3001/api/users/update-password/${data.ID_usuario}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contraseña: password,
          }),
        });

        if (!response.ok) {
          throw new Error('Fallo al actualizar');
        }
        Swal.fire({
          title: "Actualizado",
          text: "Recuperacion terminda",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
        navigate('/login');
      }


    } catch (error) {
      showAlert('danger', 'Error al procesar la solicitud. Por favor, intenta nuevamente.');
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
                      <h5 class="card-title text-center pb-0 fs-4">Restablecer Contraseña</h5>
                      <p class="text-center small">Ingresa tu nueva contraseña para continuar</p>
                    </div>

                    <form class="row g-3 needs-validation" onSubmit={handleResetPassword}>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Ingresa la nueva contraseña:</label>
                        <div class="input-group has-validation">
                          <img
                            src={IconPassword}
                            alt="username-icon"
                            style={{ height: '2.5rem', pointerEvents: 'none' }}
                            className=" input-group-text bg-info"
                          />
                          <input
                            type={mostrarContrasena ? 'text' : 'password'}
                            class="form-control"
                            placeholder="Ingrese su contraseña"
                            required maxLength="100" minLength="8"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                          <i
                            className={`mt-2 ms-2 show-password-icon ${mostrarContrasena ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
                            onClick={toggleMostrarContrasena}
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Confirma la nueva contraseña:</label>
                        <div class="input-group has-validation">
                          <img
                            src={IconPassword}
                            alt="username-icon"
                            style={{ height: '2.5rem', pointerEvents: 'none' }}
                            className=" input-group-text bg-info"
                          />
                          <input
                            type={mostrarConfirmContrasena ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Confirme su contraseña"
                            required maxLength="100" minLength="8"
                            value={confirmacion}
                            onChange={(event) => setConfirmacion(event.target.value)}
                            class="form-control" />
                          <i
                            className={`mt-2 ms-2 show-password-icon ${mostrarConfirmContrasena ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
                            onClick={toggleMostrarConfirmContrasena}
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Acceso</button>
                      </div>
                      {alert && alert.type === 'danger' && (
                        <Alert type="danger" message={alert.message} onClose={closeAlert} />
                      )}
                    </form>

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

export default ResetPassword;
