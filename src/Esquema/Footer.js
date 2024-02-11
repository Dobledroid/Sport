import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualiza el año actual al montar el componente
    setCurrentYear(new Date().getFullYear());
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>
      {/* <!-- Footer Section Begin --> */}
      <footer class="footer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__about__logo">
                  <Link to="/"><img src="/images/logo_letras.jpeg" alt="" style={{ maxHeight: '75px' }} /></Link>
                </div>
                <ul>
                  <li>Dirección: Ote. 7 MZC LT7, Parque de Poblamiento, 43000 Huejutla de Reyes, Hgo.</li>
                  <li>Teléfono: +52 7717935563</li>
                  <li>Correo : sportgymcenterinfo@gmail.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div class="footer__widget">
                <h6>Enlaces útiles</h6>
                <ul>
                  <li><Link to="/nosotros">Sobre nosotros</Link></li>
                  <li><Link to="#">Quienes somos</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
                <ul>
                  <li><Link to="/privacidad">Política de privacidad</Link></li>
                  <li><Link to="/terminos-y-condiciones">Términos y condiciones</Link></li>
                  <li><Link to="/cookies">Política de Cookies</Link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="footer__widget">
                <h6>Síguenos</h6>
                <p>Buscanos en las siguientes redes sociales.</p>
                {/* <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" class="site-btn">Subscribe</button>
                </form> */}
                <div class="footer__widget__social">
                  <a href="https://www.facebook.com/profile.php?id=100063449692054"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="footer__copyright">
                <div class="footer__copyright__text">
                  <p>
                    <Link to="/privacidad">Privacidad | </Link>
                    <Link to="/terminos-y-condiciones">Términos y condiciones | </Link>
                    <Link to="/cookies">Cookies | </Link>
                    Copyright &copy;{currentYear} Todos los derechos reservados
                  </p>
                </div>
                <div class="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
