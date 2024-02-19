import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "../../Esquema/Header.js";
import Footer from "../../Esquema/Footer.js";
import Sidebar from "../../Esquema/Sidebar.js";
import UserProfile from "./UserProfile";

import iconUserId from "./images/user-id-icon.svg";
import iconUser from "./images/user-icon.svg";
import iconAddress from "./images/address-svgrepo-com.svg";

const Panel = () => {
  const [userImage, setUserImage] = React.useState(null);

  const [user, setUser] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();


  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
      setIsLoggedIn(loggedIn);
    } else {
      navigate('/login');
    }
  }, [navigate]);


  const handleLogout = () => {
    setIsLoggedIn(false);

    // Eliminar la sesión del almacenamiento local
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    navigate('/login');
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <div className="main mt-4 p-3">
          <section className="mb-4 custom-section">
            <div className="card">
              <div className="row">
                <div className="col">
                  <UserProfile userImage={userImage} />
                </div>
                <div className="col second-col">
                  {user.tipo == "2" ? (
                    <>
                      <h5>Bienvenido, rol usuario</h5>
                      <button onClick={handleLogout} className='btn btn-warning'>Cerrar Sesión</button>
                    </>
                  ) : (
                    <>
                      <h5>Bienvenido, rol Admistrador</h5>
                      <button onClick={handleLogout} className='btn btn-warning'>Cerrar Sesión</button>
                    </>
                  )}

                  <div>{user.usuario} {user.primerApellido} {user.segundoApellido}</div>
                  <p>{user.correo}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-4 custom-section">
            <div className="card">
              <ul>
                <li className="row my-3">
                  <div className="col">
                    <UserProfile userImage={iconUserId} />
                  </div>
                  <div className="col second-col">
                    <span>Información personal</span>
                    <p>Información de tu identificación oficial y tu actividad fiscal.</p>
                  </div>
                </li>
                <li className="row my-3">
                  <div className="col">
                    <UserProfile userImage={iconUser} />
                  </div>
                  <div className="col">
                    <span>Datos de tu cuenta</span>
                    <p>Datos que representan a la cuenta en Sport Gym Center.</p>
                  </div>
                </li>
                <li className="row my-3">
                  <div className="col">
                    <UserProfile userImage={iconAddress} />
                  </div>
                  <div className="col">
                    <span>Direcciones</span>
                    <p>Direcciones guardadas en tu cuenta.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Panel;
