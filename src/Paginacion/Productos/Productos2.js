import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Productos.css';
import Header from '../../Esquema/Header';
import Footer from '../../Esquema/Footer';


const ProductCard = () => {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState('');
  const [precioDesde, setPrecioDesde] = useState('');
  const [precioHasta, setPrecioHasta] = useState('');
  const [heartClass, setHeartClass] = useState('fa-heart-o');

  const handleHeartClick = () => {
    setHeartClass((prevClass) => (prevClass === 'fa-heart' ? 'fa-heart-o' : 'fa-heart'));
  };

  const peticionGet = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products');
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      setProductos(data);
      setTablaProductos(data);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    peticionGet();
  }, [])

  const handleClick = (_id) => {
    navigate('/producto', { state: { _id: _id } })
  };

  const handleTodos = () => {
    // setBusqueda('');
    setCategoria('');
    // peticionGet();
  };

  const handleSuplemento = () => {
    // setBusqueda('');
    setCategoria('Suplemento');
  };

  const handleEquipo = () => {
    // setBusqueda('');
    setCategoria('Equipo');
  };

  const handleVitaminas = () => {
    // setBusqueda('');
    setCategoria('Vitaminas');
  };
  const handleIntegral = () => {
    // setBusqueda('');
    setCategoria('Integral');
  };
  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    console.log(terminoBusqueda)
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    console.log('resultadosBusqueda', resultadosBusqueda)
    setProductos(resultadosBusqueda);
  }




  return (
    <div>
      <Header />
      <div className="container-xl">
        <div className="row">
          
          <div className="col-md-12">
            <h2 className='h2Products'><b>Productos</b></h2>
            <div className="container-fluid ml-4">
              <div className='mb-3'>
                <form className="d-flex" >
                  <input className="form-control" type="search" placeholder="Buscar" aria-label="Buscar" value={busqueda} onChange={handleChange} style={{
                    marginLeft: '50px', marginRight: '1rem'
                  }} />
                </form>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div id="menu-flters">
                    <button
                      data-filter="btn btn-primary"
                      className={categoria === '' ? 'btn btn-success m-3' : 'btn btn-primary m-3'}
                      onClick={handleTodos}
                    >
                      Todos
                    </button>
                    <button
                      data-filter=".filter-starters"
                      className={categoria === 'Suplemento' ? 'btn btn-success m-3' : 'btn btn-primary m-3'}
                      onClick={handleSuplemento}
                    >
                      Suplementos
                    </button>
                    <button
                      data-filter=".filter-salads"
                      className={categoria === 'Equipo' ? 'btn btn-success m-3' : 'btn btn-primary m-3'}
                      onClick={handleEquipo}
                    >
                      Equipo
                    </button>
                    <button
                      data-filter=".filter-specialty"
                      className={categoria === 'Vitaminas' ? 'btn btn-success m-3' : 'btn btn-primary m-3'}
                      onClick={handleVitaminas}
                    >
                      Vitaminas
                    </button>
                    <button
                      data-filter=".filter-specialty"
                      className={categoria === 'Integral' ? 'btn btn-success m-3' : 'btn btn-primary m-3'}
                      onClick={handleIntegral}
                    >
                      Integral
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {productos
  .filter((art) => categoria === '' || art.Categoria === categoria)
  .map((art, index, array) => {
    if (index % 4 === 0) {
      const sliceEnd = index + 4 > array.length ? array.length : index + 4;
      const productosSlice = array.slice(index, sliceEnd);

      return (
        <div className='item' key={`item-${index}`}>
          <div className="row">
            {productosSlice.map((productoSlice) => (
              <div className="col-sm-3" key={productoSlice.id}>
                <div className="thumb-wrapper">
                  <span className="wish-icon" onClick={handleHeartClick}>
                    <i className={`fa ${heartClass}`}></i>
                  </span>
                  <div className="img-box">
                    <img src={productoSlice.ImagenUrl} className="img-fluid" alt="Headphone" />
                  </div>
                  <div className="thumb-content">
                    <h4>{productoSlice.Nombre}</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>{`$${productoSlice.PrecioDescuento}`}</strike> <b>{`$${productoSlice.Precio}`}</b></p>
                    <Link to={`/producto/${productoSlice.id}`} className="btn btn-primary">Ver detalles</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null; // No renderizar nada si no es el inicio de una nueva fila
  })}





          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductCard;
