import React, { useState } from "react";
// import "./Productos.css";
import Header from "../../Esquema/Header";
import Footer from "../../Esquema/Footer";

const Carrito = () => {
  return (
    <div>
      <Header />
      <section class="shoping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th class="shoping__product">Productos</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="shoping__cart__item">
                        <img src="/images/Products/mancuernas.jpg" alt="" 
                          className="image-small-carrito"/>
                        <h5>Mancuerna Best JY3350-10 Hierro</h5>
                      </td>
                      <td class="shoping__cart__price">
                        $1190.00
                      </td>
                      <td class="shoping__cart__quantity">
                        <div class="quantity">
                          <div class="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td class="shoping__cart__total">
                        $833.00
                      </td>
                      <td class="shoping__cart__item__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td class="shoping__cart__item">
                        <img src="/images/Products/all-in-pre-workout.png" alt="" 
                          className="image-small-carrito"/>
                        <h5>Preentrenamiento todo en uno</h5>
                      </td>
                      <td class="shoping__cart__price">
                        $560.00
                      </td>
                      <td class="shoping__cart__quantity">
                        <div class="quantity">
                          <div class="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td class="shoping__cart__total">
                        $430.99
                      </td>
                      <td class="shoping__cart__item__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__btns">
                <a href="#" class="primary-btn cart-btn">SEGUIR COMPRANDO</a>
                <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                  Actualizar el carrito</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping__continue">
                <div class="shoping__discount">
                  <h5>Códigos de descuento</h5>
                  <form action="#">
                    <input type="text" placeholder="Ingrese su código de cupón " />
                    <button type="submit" class="site-btn">APLICAR CUPÓN</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping__checkout">
                <h5>Total del carrito</h5>
                <ul>
                  <li>Subtotal <span>$454.98</span></li>
                  <li>Total <span>$454.98</span></li>
                </ul>
                <a href="#" class="primary-btn">CONTINUAR A LA CAJA</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Carrito;