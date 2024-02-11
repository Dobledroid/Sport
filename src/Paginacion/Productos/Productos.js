import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Productos.module.css';
import Header from '../../Esquema/Header';
import Footer from '../../Esquema/Footer';

const Productos = () => {
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [busquedaText, setBusquedaText] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);

  const [showFilters, setShowFilters] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Función para manejar la selección de una categoría
  const handleCategoriaSeleccionada = (categoria) => {
    console.log("handleCategoriaSeleccionada", categoria.ID_categoria)
    setCategoriaSeleccionada(categoria);
    setMarcaSeleccionada(null); // Limpiar marca seleccionada al seleccionar una categoría
    setSubcategoriaSeleccionada(null); // Limpiar subcategoría seleccionada al seleccionar una categoría
    filtrarProductos({ categoriaId: categoria.ID_categoria });
  };


  const handleMarcaClick = (marcaId) => {
    setMarcaSeleccionada(marcaId);
    filtrarProductos({ marcaId });
  };

  const handleSubcategoriaClick = (subcategoriaId) => {
    setSubcategoriaSeleccionada(subcategoriaId);
    filtrarProductos({ subcategoriaId });
  };

  const filtrarProductos = async (filtros) => {
    console.log("filtros", filtros)
    try {
      const response = await fetch(`http://localhost:3001/api/products?${new URLSearchParams(filtros).toString()}`);
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      const data = await response.json();
      setProductosFiltrados(data);
      console.log("filtrarProductos", data)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        setProductosOriginales(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/categorias-productos');
        if (!response.ok) {
          throw new Error(`Error en la petición de categorías: ${response.status}`);
        }
        const data = await response.json();
        setCategorias(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMarcas = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/marcas');
        if (!response.ok) {
          throw new Error(`Error en la petición de marcas: ${response.status}`);
        }
        const data = await response.json();
        setMarcas(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSubcategorias = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/subcategorias');
        if (!response.ok) {
          throw new Error(`Error en la petición de subcategorías: ${response.status}`);
        }
        const data = await response.json();
        setSubcategorias(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
    fetchCategorias();
    fetchMarcas();
    fetchSubcategorias();

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredProductos = productosOriginales.filter(producto =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductosFiltrados(filteredProductos);
    setBusquedaText(busqueda);
  };

  const limpiarFiltro = () => {
    setCategoriaSeleccionada(null);
    setMarcaSeleccionada(null);
    setSubcategoriaSeleccionada(null);
    setProductosFiltrados(productosOriginales); // Mostrar todos los productos nuevamente
  };

  return (
    <>
      <Header />
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="What do you need?"
                      value={busqueda}
                      onChange={handleBusquedaChange}
                    />
                    <button type="submit" className="site-btn">SEARCH</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid my-5">
        <div>
          {/* Filtros para pantallas pequeñas */}
          {showFilters && (
            <div className={`mobile-filters ${screenSize < 768 ? '' : 'd-none'}`}>
              <h2>Filtros</h2>
              <div className={`${styles.sidebarSection}`}>
                <h3>Marca</h3>
                <ul>
                  <li><a href="#"><span>Marca 1</span></a></li>
                  <li><a href="#"><span>Marca 2</span></a></li>
                  <li><a href="#"><span>Marca 3</span></a></li>
                  {/* Agrega más marcas según sea necesario */}
                </ul>
              </div>
              <div className={`${styles.sidebarSection}`}>
                <h3>Sabor</h3>
                <ul>
                  <li><a href="#"><span>Sabor 1</span></a></li>
                  <li><a href="#"><span>Sabor 2</span></a></li>
                  <li><a href="#"><span>Sabor 3</span></a></li>
                  {/* Agrega más sabores según sea necesario */}
                </ul>
              </div>
              <div className={`${styles.sidebarSection}`}>
                <h3>Precio</h3>
                <ul>
                  <li><a href="#"><span>Precio 1</span></a></li>
                  <li><a href="#"><span>Precio 2</span></a></li>
                  {/* Agrega más precios según sea necesario */}
                </ul>
                <form>
                  <input type="text" placeholder="Precio mínimo" style={{ width: '100px', marginRight: '10px' }} />
                  <input type="text" placeholder="Precio máximo" style={{ width: '100px', marginRight: '10px' }} />
                  <button type="submit">Filtrar</button>
                </form>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-9 mb-3 d-md-none">
              <button onClick={toggleFilters}>Mostrar Filtros</button>
            </div>
            <div className="col-md-3 d-none d-md-block">
              <div className={`${styles.sidebar}`}>
                <h2>{busquedaText}</h2>
                <div className={`${styles.sidebarSection}`}>
                  <h3>Categorías</h3>
                  <ul>
                    {/* Mostrar la categoría seleccionada si está definida */}
                    {categoriaSeleccionada && (
                      <li key={categoriaSeleccionada.id}>
                        <span>{categoriaSeleccionada.nombre}</span>
                        <button onClick={limpiarFiltro}>X</button>
                      </li>
                    )}
                    {/* Mostrar las demás categorías si no hay una seleccionada */}
                    {!categoriaSeleccionada && categorias.map(categoria => (
                      <li key={categoria.id}>
                        <Link to="#" onClick={() => handleCategoriaSeleccionada(categoria)}>{categoria.nombre}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${styles.sidebarSection}`}>
                  <h3>Marcas</h3>
                  <ul>
                    {marcas.map(marca => (
                      <li key={marca.id}>
                        <Link to={`/marca/${marca.id}`}>{marca.nombre}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${styles.sidebarSection}`}>
                  <h3>Subcategorías</h3>
                  <ul>
                    {subcategorias.map(subcategoria => (
                      <li key={subcategoria.id}>
                        <Link to={`/subcategoria/${subcategoria.id}`}>{subcategoria.nombre}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${styles.sidebarSection}`}>
                  <h3>Precio</h3>
                  <ul>
                    <li><a href="#"><span>Precio 1</span></a></li>
                    <li><a href="#"><span>Precio 2</span></a></li>
                    {/* Agrega más precios según sea necesario */}
                  </ul>
                  <form>
                    <input type="text" placeholder="Precio mínimo" style={{ width: '100px', marginRight: '10px' }} />
                    <input type="text" placeholder="Precio máximo" style={{ width: '100px', marginRight: '10px' }} />
                    <button type="submit">Filtrar</button>
                  </form>
                </div>

              </div>
            </div>
            <div className="col-md-9">
              {/* Agrega aquí tus productos */}
              <div className="row">
                {productosFiltrados.map((producto, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <Link to={`/verdetalleproducto/${producto.ID_producto}`}>
                      <div className={`${styles.productCard} card`}>
                        <img src={producto.imagenUrl} alt={`Producto ${producto.ID_producto}`} className="card-img-top" />
                        <div className={`${styles.cardBody} card-body`}>
                          <h5 className="card-title">{producto.nombre}</h5>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <p className="card-text">
                            <span className="text-danger"><strike>${producto.precio}</strike></span>
                            <br />
                            <span className="text-muted">${producto.precioDescuento}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productos;
