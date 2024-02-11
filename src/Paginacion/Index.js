import React from 'react';
import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
import Header from '../Esquema/Header';
import Footer from '../Esquema/Footer';
import './Index.css'

const Index = () => {
  return (
    <>
      <Header />
      <section className='hero mt-1'>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/Carrusel/1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/images/Carrusel/2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/images/Carrusel/1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>
      <div className='container'>
      <div>
        <div id="accessibility-buttons">
          {/* Botón para redirigir a la vista de aumentar el tamaño de texto */}
          <Link to="/menuVisual" className="btn btn-info"
            data-bs-toggle="tooltip" data-bs-placement="right"
            title="Accesibilidad para personas con discapacidad visual">
            <i className="icon-blind"></i>
          </Link>

          {/* Botón para redirigir a la vista de habilitar la lectura de pantalla */}
          <Link to="/indexH" className="btn btn-danger ml-2"
            data-bs-toggle="tooltip" data-bs-placement="right"
            title="Accesibilidad de carga rápida">
            <i className="icon-file-text"></i>
          </Link>
        </div>
        {/* <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel/1.jpg" 
                alt="Primera imagen"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel/2.jpg" 
                alt="Primera imagen"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/Carrusel/3.jpg" 
                alt="Primera imagen"
              />

            </Carousel.Item>
          </Carousel> */}

        {/* <!-- Related items section--> */}
        <section class="py-5 bg-light">
          <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4">Productos relacionados</h2>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div class="col mb-5">
                <div class="card">
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products/all-in-one-post-workout.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Post-entrenamiento todo en uno</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$655.00</strike> <span>$600.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-5">
                <div class="card">
                  {/* <!-- Sale badge--> */}
                  <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products//brownie_proteico.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Brownie proteico</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$150.00</strike> <span>$110.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-5">
                <div class="card">
                  {/* <!-- Sale badge--> */}
                  <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products/dailyvitamins.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Vitaminas Diarias</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$470.00</strike> <span>$350.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-5">
                <div class="card">
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products/energy-bars.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Barrita energética</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$250.00</strike> <span>$200.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-5">
                <div class="card">
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products/protein_3k.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Proteína 3k</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$520v.00</strike> <span>$450.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-5">
                <div class="card">
                  <div className="thumbP">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img src="/images/Products/creatine-pulver.png" className="img-fluid" alt="Play Station" />
                    </div>
                    <div className="thumb-content">
                      <h4>Creatina en polvo</h4>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p className="item-price"><strike>$250.00</strike> <span>$200.00</span></p>
                      <a href="#" className="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
