import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Esquema/Header.js';
import Footer from '../../Esquema/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [primerApellidoError, setPrimerApellidoError] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [segundoApellidoError, setSegundoApellidoError] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [alerta, setAlerta] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const captcha = useRef(null);

  const validarNombre = (value) => {
    if (!value.trim()) {
      setNombreError('¡Por favor, escriba su nombre!');
      return false;
    } else if (value.trim().length < 3) {
      setNombreError('¡El nombre debe tener al menos 3 caracteres!');
      return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(value.trim())) {
      setNombreError('¡El nombre solo puede contener letras y espacios!');
      return false;
    } else {
      setNombreError('');
      return true;
    }
  };

  const validarApellido = (value, apellido, setError) => {
    if (!value.trim()) {
      setError(`¡Por favor, escriba su ${apellido}!`);
      return false;
    } else if (value.trim().length < 3) {
      setError(`¡El ${apellido} debe tener al menos 3 caracteres!`);
      return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(value.trim())) {
      setError(`¡El ${apellido} solo puede contener letras y espacios!`);
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const handleNombreChange = (e) => {
    const inputValue = e.target.value;
    setNombre(inputValue);
    if (primerApellidoError || segundoApellidoError) {
      validarApellido(primerApellido, "Apellido Paterno", setPrimerApellidoError);
      validarApellido(segundoApellido, "Apellido Materno", setSegundoApellidoError);
    } else {
      const validacionNombre = validarNombre(inputValue);
      if (validacionNombre) {
        setAlerta(null); // Limpiar la alerta si la validación del nombre es exitosa
      }
    }
  };
  
  const handlePrimerApellidoChange = (e) => {
    const inputValue = e.target.value;
    setPrimerApellido(inputValue);
    const validacionApellido = validarApellido(inputValue, "Apellido Paterno", setPrimerApellidoError);
    if (validacionApellido) {
      setAlerta(null); // Limpiar la alerta si la validación del apellido paterno es exitosa
    }
  };
  
  const handleSegundoApellidoChange = (e) => {
    const inputValue = e.target.value;
    setSegundoApellido(inputValue);
    const validacionApellido = validarApellido(inputValue, "Apellido Materno", setSegundoApellidoError);
    if (validacionApellido) {
      setAlerta(null); // Limpiar la alerta si la validación del apellido materno es exitosa
    }
  };

  const validarCorreoElectronico = (correo) => {
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
    const nombreValido = validarNombre(nombre);
    const apellidoPaternoValido = validarApellido(primerApellido, "Apellido Paterno", setPrimerApellidoError);
    const apellidoMaternoValido = validarApellido(segundoApellido, "Apellido Materno", setSegundoApellidoError);

    if (!nombreValido || !apellidoPaternoValido || !apellidoMaternoValido) {
      // Si alguna de las validaciones no pasa, mostrar alerta y detener el registro
      setAlerta('Por favor completa y verifica los campos marcados.');
      return;
    }
    if (!validarCorreoElectronico(email)) {
      setAlerta('Por favor ingrese una dirección de correo electrónico válida.');
      return;
    }

    const passwordErrors = validacionesContraseña(contrasena, confirmarContrasena);
    if (passwordErrors.length > 0) {
      setAlerta(passwordErrors.join(' '));
      return;
    }

    console.log("Realizando solicitud de registro...");
    try {
      const response = await fetch('https://api-rest-sport.vercel.app/api/users/', {
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
        Swal.fire({
          title: "Exito",
          text: "Usuario registrado exitosamente",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
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
                        <input type="text" name="name" className={`form-control ${nombreError ? 'is-invalid' : ''}`} id="yourName" required value={nombre} onChange={handleNombreChange} />
                        {nombreError && <div className="invalid-feedback">{nombreError}</div>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourApePat" className="form-label">Apellido Paterno</label>
                        <input type="text" name="ApePat" className={`form-control ${primerApellidoError ? 'is-invalid' : ''}`} id="ApePat" required value={primerApellido} onChange={handlePrimerApellidoChange} />
                        {primerApellidoError && <div className="invalid-feedback">{primerApellidoError}</div>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourApeMat" className="form-label">Apellido Materno</label>
                        <input type="text" name="ApeMat" className={`form-control ${segundoApellidoError ? 'is-invalid' : ''}`} id="ApeMat" required value={segundoApellido} onChange={handleSegundoApellidoChange} />
                        {segundoApellidoError && <div className="invalid-feedback">{segundoApellidoError}</div>}
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
