import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Esquema/Header.js';
import Footer from '../../Esquema/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [alerta, setAlerta] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para mostrar/ocultar la confirmación de la contraseña
  const navigate = useNavigate();
  const captcha = useRef(null);

  const validarCorreoElectronico = (correo) => {
    // Expresión regular para validar un correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(correo).toLowerCase());
  };

  const validacionesContraseña = (password, confirmacion) => {
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

    return errors;
  };

  const handleRegistro = async (event) => {
    event.preventDefault();

    console.log("Registrando usuario...");

    if (
      nombre.trim() === '' ||
      primerApellido.trim() === '' ||
      segundoApellido.trim() === '' ||
      email.trim() === '' ||
      contrasena === '' ||
      confirmarContrasena === ''
    ) {
      console.log("Faltan campos por completar");
      setAlerta('Por favor completa todos los campos.');
      return;
    }

    // Validar el formato del correo electrónico
    if (!validarCorreoElectronico(email)) {
      setAlerta('Por favor ingrese una dirección de correo electrónico válida.');
      return;
    }

    const passwordErrors = validacionesContraseña(contrasena, confirmarContrasena);
    if (passwordErrors.length > 0) {
      setAlerta(passwordErrors.join(' '));
      return;
    }

    // if (!captcha.current || !captcha.current.getValue()) {
    //   console.log("El ReCAPTCHA no está completo");
    //   setAlerta('Por favor completa el ReCAPTCHA.');
    //   return;
    // }

    console.log("Realizando solicitud de registro...");
    try {
      const response = await fetch('http://localhost:3001/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          primerApellido,
          segundoApellido,
          correoElectronico: email,
          contrasena,
        }),
      });

      if (response.ok) {
        console.log("Usuario registrado exitosamente");
        
        navigate('/login');
      } else {
        console.log("Error al registrar usuario");
        const errorData = await response.json();
        setAlerta(errorData.msg);
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
      setAlerta('Error al crear usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Crea una cuenta</h5>
                      <p className="text-center small">Ingrese sus datos para crear una cuenta</p>
                    </div>
                    <form onSubmit={handleRegistro} className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Nombre</label>
                        <input type="text" name="name" className="form-control" id="yourName" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <div className="invalid-feedback">¡Por favor, escriba su nombre!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourApePat" className="form-label">Apellido Paterno</label>
                        <input type="text" name="ApePat" className="form-control" id="ApePat" required value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} />
                        <div className="invalid-feedback">¡Por favor, escriba su Apellido Paterno!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourApeMat" className="form-label">Apellido Materno</label>
                        <input type="text" name="ApeMat" className="form-control" id="ApeMat" required value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)} />
                        <div className="invalid-feedback">¡Por favor, escriba su Apellido Materno!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Correo Electrónico</label>
                        <input type="email" name="email" className="form-control" id="yourEmail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="invalid-feedback">¡Ingrese una dirección de correo electrónico válida!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Contraseña</label>
                        <div className="input-group">
                          <input type={showPassword ? "text" : "password"} name="password" className="form-control" id="yourPassword" required value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                          <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <div className="invalid-feedback">¡Por favor, introduzca su contraseña!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPasswordConfirm" className="form-label">Confirmar Contraseña</label>
                        <div className="input-group">
                          <input type={showConfirmPassword ? "text" : "password"} name="PasswordConfirm" className="form-control" id="PasswordConfirm" required value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
                          <button className="btn btn-outline-secondary" type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <div className="invalid-feedback">¡Por favor, introduzca su contraseña!</div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Crear una cuenta</button>
                      </div>
                      {alerta && (
                        <div className="col-12 mt-2">
                          <div className="alert alert-danger" role="alert">
                            {alerta}
                          </div>
                        </div>
                      )}
                    </form>
                    <div className="col-12">
                      <p className="small mb-0">¿Ya tienes una cuenta? <Link to="/login">Acceso</Link></p>
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

export default Registro;