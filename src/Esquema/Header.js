import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';

const Header = () => {

  const navigate = useNavigate();
  // const { loggedIn, user, logout } = useContext(SessionContext);
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    $(".humberger__open").on("click", function () {
      $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
      $(".humberger__menu__overlay").addClass("active");
      $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on("click", function () {
      $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
      $(".humberger__menu__overlay").removeClass("active");
      $("body").removeClass("over_hid");
    });
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
      setIsLoggedIn(loggedIn);
    }
  }, []);

  return (
    <>
      {/* Para telefonos */}
      <div class="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
          <Link to="/"><img src="images/logo_letras.jpeg" alt="" /></Link>
        </div>
        <div class="humberger__menu__cart">
          <ul>
            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
            <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
          </ul>
          <div class="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div class="humberger__menu__widget">
          <div class="header__top__right__auth__sm">
            <Link to="/login"><i class="fa fa-user"></i> Login</Link>
          </div>
        </div>
        <nav class="humberger__menu__nav">
          <ul>
            <li class="active"><Link to="/">Inicio</Link></li>
            <li><Link to="/tienda">Tienda</Link></li>
            {/* <li><a href="#">Pages</a>
              <ul class="header__menu__dropdown">
                <li><a href="./shop-details.html">Shop Details</a></li>
                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                <li><a href="./checkout.html">Check Out</a></li>
                <li><a href="./blog-details.html">Blog Details</a></li>
              </ul>
            </li> */}
            <li><Link to="/Nosotros">Nosotros</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-pinterest-p"></i></a>
        </div>
        <div class="humberger__menu__contact">
          <ul>
            <li><i class="fa fa-envelope"></i> sportgymcenterinfo@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* para pantallas grandes  */}
      <header class="header">
        {/* <div class="header__top">
          <div class="container bg-warning">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="header__top__left">
                  <ul>
                    <li><i class="fa fa-envelope"></i> hellophione@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="header__top__right">
                  <div class="header__top__right__social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                  </div>
                  <div class="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span class="arrow_carrot-down"></span>
                    <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </div>
                  <div class="header__top__right__auth">
                    <a href="#"><i class="fa fa-user"></i> Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="header__logo">
                <Link to="/"><img src="images/logo_letras.jpeg" alt="" /></Link>
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="header__menu">
                <ul>
                  <li class="active"><Link to="/">Inicio</Link></li>
                  <li><Link to="/tienda">Tienda</Link></li>
                  {/* <li><a href="#">Pages</a>
                    <ul class="header__menu__dropdown">
                      <li><a href="./shop-details.html">Shop Details</a></li>
                      <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                      <li><a href="./checkout.html">Check Out</a></li>
                      <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                  </li> */}
                  <li><Link to="/nosotros">Nosotros</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="header__cart">
                <ul>
                  <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                  <li><Link to="/carrito"><i class="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                </ul>
                {isLoggedIn ? (
                  <>
                    <div class="header__top__right__auth">
                      <Link to="/perfil"><i class="fa fa-user"></i> Ver mi perfil</Link>
                    </div>
                    <div class="header__cart__price ms-4">Bienvenido, <span>{user.usuario}</span> ...!</div>

                  </>
                ) : (
                  <>
                    <div class="header__top__right__auth">
                      <Link to="/login"><i class="fa fa-user"></i> Login</Link>
                    </div>
                    <div class="header__cart__price ms-4">item: <span>$150.00</span></div>
                  </>
                )}


              </div>

            </div>
          </div>
          <div class="humberger__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;