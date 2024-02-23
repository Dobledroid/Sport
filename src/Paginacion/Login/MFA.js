import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../Esquema/Header';
import Footer from '../../Esquema/Footer';
import Alert from '../Validaciones/Alerts/Alert';

const MFA = () => {
  const [method, setMethod] = useState('1');
  const [alert, setAlert] = useState(null);
  const [showTokenForm, setShowTokenForm] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false); // Nuevo estado para mostrar el botón de reenviar código
  const [elapsedTime, setElapsedTime] = useState(0); // Nuevo estado para controlar el tiempo transcurrido
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const dataUser = location.state;

  const handleMFA = async (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    // console.log("dataUser ", dataUser)
    if (method === '2') {
      setAlert({ type: 'danger', message: 'Opción no disponible por el momento.' });
      return new Error('Opción no disponible por el momento.');
    }
    try {
      // const response = await fetch('http://localhost:3010/api/sendMethod', {
      const response = await fetch('https://api-rest-sport.vercel.app/api/sendMethod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: method,
          email: dataUser.correoElectronico
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setAlert({ type: 'danger', message: 'Error al enviar el código de verificación' });
        return new Error('Error al enviar el código de verificación');
      } else {
        setAlert({ type: 'success', message: 'Correo enviado con su código' });
      }



      // console.log('MFA ', data)
      setShowTokenForm(true);
    } catch (error) {
      console.log(error.msg)
      setAlert({ type: 'danger', message: error.message });
    }
  };

  const handleTokenSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = event.target.elements.token.value;
      // const response = await fetch('http://localhost:3010/api/validateToken', {
      const response = await fetch('https://api-rest-sport.vercel.app/api/validateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: dataUser.ID_usuario,
          token: token,
        }),
      });
      const data = await response.json();
      console.log("data", data)
      if (!response.ok) {
        throw new Error(data.msg);
      }

      // console.log("dataUser.correoElectronico", dataUser.correoElectronico)
      const id = dataUser.ID_usuario;
      // const loginResponse = await fetch('http://localhost:3010/api/users/', {
        const loginResponse = await fetch(`https://api-rest-sport.vercel.app/api/users/${id}`);

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(data.msg);
      }
      // console.log("loginData", loginData)

      const user = { usuario: loginData.nombre, correo:dataUser.correoElectronico, id: dataUser.ID_usuario, tipo: dataUser.ID_rol };
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/perfil', { state: user })

    } catch (error) {
      console.log(error)
      setAlert({ type: 'danger', message: error.msg });
    }
  };

  const handleResendCode = () => {
    setElapsedTime(0);
    handleMFA();
  };

  useEffect(() => {
    // Actualizar el tiempo transcurrido cada segundo
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);
    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (elapsedTime > 30) {
      setShowResendButton(true);
    }
  }, [elapsedTime]);

  const closeAlert = () => {
    setAlert(null);
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
                      <h5 class="card-title text-center pb-0 fs-4">Verifica tu identidad</h5>
                      <p class="text-center small"></p>
                    </div>
                    {!showTokenForm ? (
                      <form onSubmit={handleMFA} class="row g-3 needs-validation">

                        <div class="col-12">
                          <label class="form-label">Método de autentificación:</label>
                          <div class="input-group has-validation">
                            <select
                              id="method"
                              className="form-select"
                              value={method}
                              onChange={(e) => setMethod(e.target.value)}
                              aria-label="Default select example"
                            >
                              <option value="1">Correo electrónico</option>
                              <option value="2">SMS</option>
                            </select>
                          </div>
                        </div>
                        <p className='my-3'>Envíe un código de verificación a {dataUser.correoElectronico}</p>


                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">Enviar código</button>
                        </div>

                      </form>
                    ) : (
                      <form onSubmit={handleTokenSubmit} class="row g-3 needs-validation">

                        <div class="col-12">
                          <label for="yourUsername" class="form-label">Método de autentificación:</label>
                          <div class="input-group has-validation">
                            <input type="number" name="token" class="form-control" placeholder="Ingrese el código"
                            />
                          </div>
                        </div>
                        <p className='my-3'>Envíe un código de verificación a {dataUser.correoElectronico}</p>


                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">Enviar código</button>
                        </div>

                        {showResendButton && (
                          <button
                            type="button"
                            className="btn btn-secondary text-white w-100 mt-3 mb-3 fw-semibold shadow-sm"
                            onClick={handleResendCode}
                          >
                            Reenviar código
                          </button>
                        )}
                      </form>
                    )}
                    {alert && alert.type === 'success' && (
                      <Alert type="success" message={alert.message} onClose={closeAlert} />
                    )}
                    {alert && alert.type === 'danger' && (
                      <Alert type="danger" message={alert.message} onClose={closeAlert} />
                    )}
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

export default MFA;
