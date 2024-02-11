import React from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../Esquema/Header.js";
import Footer from "../../Esquema/Footer.js";
import Sidebar from "../../Esquema/Sidebar.js";
import UserProfile from "./UserProfile";

import iconUserId from "./images/user-id-icon.svg";
import iconUser from "./images/user-icon.svg";
import iconAddress from "./images/address-svgrepo-com.svg";

const Panel = () => {
  const [userImage, setUserImage] = React.useState(null);
  const location = useLocation();

  const dataUser = location.state;
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
                  <div>{dataUser.nombre} {dataUser.primerApellido} {dataUser.segundoApellido}</div>
                  <p>{dataUser.correoElectronico}</p>
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
