import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Esquema/Header.js';
import Footer from '../../Esquema/Footer';
import Alert from '../Validaciones/Alerts/Alert.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Registro.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [alerta, setAlerta] = useState(null);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] = useState(false);
  const [mostrarCaptcha, setMostrarCaptcha] = useState(false); // Nuevo estado para controlar la visibilidad del ReCAPTCHA
  const navigate = useNavigate();
  const captcha = useRef(null);

  const onChange = async () => {
    try {
      const value = await captcha.current.getValue();
      //console.log('Captcha value:', value);
      // Aquí puedes realizar cualquier acción adicional con el valor del ReCAPTCHA, como enviarlo al servidor
    } catch (error) {
      console.error('Error al obtener el valor del ReCAPTCHA:', error);
    }
  };

  const handleRegistro = async (event) => {
    event.preventDefault();

    // Validación de campos vacíos
    if (
      nombre.trim() === '' ||
      primerApellido.trim() === '' ||
      segundoApellido.trim() === '' ||
      email.trim() === '' ||
      contrasena === '' ||
      confirmarContraseña === ''
    ) {
      setAlerta({ type: 'danger', message: 'Por favor completa todos los campos.' });
      return;
    }

    // Validación de que nombre, primer apellido y segundo apellido solo contengan texto
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nameRegex.test(nombre) || !nameRegex.test(primerApellido) || !nameRegex.test(segundoApellido)) {
      setAlerta({ type: 'danger', message: 'Los campos de nombre, primer apellido y segundo apellido solo pueden contener letras.' });
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlerta({ type: 'danger', message: 'Por favor ingresa un correo electrónico válido.' });
      return;
    }

    // Validación de contraseña segura
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(contrasena)) {
      setAlerta({ type: 'danger', message: 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.' });
      return;
    }

    // Validación de contraseña y confirmación de contraseña
    if (contrasena !== confirmarContraseña) {
      setAlerta({ type: 'danger', message: 'Las contraseñas no coinciden.' });
      return;
    }
    setMostrarCaptcha(true);

    // Si todas las validaciones pasan, muestra el ReCAPTCHA
    ///Validar si el ReCAPTCHA ha sido completado
    // if (!captcha.current || !captcha.current.getValue()) {
    //   setAlerta({ type: 'danger', message: 'Por favor completa el ReCAPTCHA.' });
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          primerApellido,
          segundoApellido,
          correoElectronico: email, // Asegúrate de enviar el correo con el nombre esperado en el backend
          contrasena,
        }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        setAlerta({ type: 'danger', message: errorData.msg });
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
      setAlerta({ type: 'danger', message: 'Error al crear usuario. Por favor, intenta nuevamente.' });
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
                      <h5 class="card-title text-center pb-0 fs-4">Crea una cuenta</h5>
                      <p class="text-center small">Ingrese sus datos personales para crear una cuenta</p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="yourName" class="form-label">Su nombre</label>
                        <input type="text" name="name" class="form-control" id="yourName" required />
                          <div class="invalid-feedback">¡Por favor, escriba su nombre!</div>
                      </div>

                      <div class="col-12">
                        <label for="yourEmail" class="form-label">Tu correo electrónico</label>
                        <input type="email" name="email" class="form-control" id="yourEmail" required />
                          <div class="invalid-feedback">¡Ingrese una dirección de correo electrónico válida!</div>
                      </div>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Nombre de usuario</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" class="form-control" id="yourUsername" required />
                            <div class="invalid-feedback">Por favor, elija un nombre de usuario.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Contraseña</label>
                        <input type="password" name="password" class="form-control" id="yourPassword" required />
                          <div class="invalid-feedback">¡Por favor, introduzca su contraseña!</div>
                      </div>

                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Crear una cuenta</button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">¿Ya tienes una cuenta? <Link to="/login">Acceso</Link></p>
                      </div>
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

export default Registro;
