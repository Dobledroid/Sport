import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Esquema/Header';
import Footer from '../../../Esquema/Footer';
import './AdmProductos.css';
import AgregarProducto from "./AgregarProducto";
import EditarProducto from "./EditarProducto";
import EliminarProducto from "./Eliminar";

const AdmProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarComponente, setMostrarComponente] = useState(null);
  const [prodEditando, setProdEditando] = useState(null);
  const [prodEliminando, setProdEliminando] = useState(null);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products/relations');
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setProductos(data);
        setCargando(false);
        setRecuperado(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, []);

  const handleEditar = (producto) => {
    setProdEditando(producto);
    setMostrarComponente("editar");
    setRecuperado(!recuperado);
  };
  const handleEliminar = (producto) => {
    setProdEliminando(producto);
    setMostrarComponente("eliminar");
  };

  const confirmarEliminar = async () => {
    setCargando(true);
    const response = await fetch(
      `https://api-rest-luis-r45f.vercel.app/products/${prodEliminando._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log("dataEliminar", data)
  };

  return (
    <>
      <Header />
      <div className='content'>
        <div className='containerAdm'>
          <div className="pagetitle">
            <h1>Usuarios</h1>
          </div>

          <p>Registros</p>

          <section>
            <div className="row">
              <div className="card">
                
                {cargando ? (
                  <div>Cargando productos...</div>
                ) : mostrarComponente === "editar" ? (
                  <EditarProducto
                    productos={prodEditando}
                    guardarProdEditando={setProdEditando}
                    guardarRecuperado={setRecuperado}
                    cerrarComponente={() => setMostrarComponente(null)}
                  />
                ) : mostrarComponente === "eliminar" ? (
                  <EliminarProducto
                    articulos={prodEliminando}
                    confirmarEliminar={confirmarEliminar}
                    cancelarEliminar={() => setMostrarComponente(null)}
                  />
                ) : mostrarComponente === "agregar" ? (
                  <AgregarProducto
                    guardarRecuperado={setRecuperado}
                    cerrarComponente={() => setMostrarComponente(null)}
                  />
                ) : (
                  <div className="card-body">
                  <div className="d-flex justify-content-between mb-0">
                    <h5 className="card-title">Registros de la tabla Usuarios</h5>

                    <p className="card-title">
                      <button to="/AgregarProducto" onClick={() => setMostrarComponente("agregar")} className="btn btn-primary">
                        Agregar
                      </button>
                    </p>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Precio Descuesto</th>
                          <th scope="col">Categoría</th>
                          <th scope="col">Subcategoría</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productos.map(producto => (
                          <tr key={producto.ID_producto}>
                            <th scope="row">{producto.ID_producto}</th>
                            <td>{producto.nombre.slice(0, 150)}...</td>
                            <td>{producto.descripcion.slice(0, 150)}...</td>
                            <td>{producto.precio}</td>
                            <td>{producto.precioDescuento}</td>
                            <td>{producto.nombreCategoria}</td>
                            <td>{producto.nombreSubcategoria}</td>
                            <td>{producto.nombreMarca}</td>
                            {/* <td className="d-flex justify-content-center">
                              <Link to={`/EditarProducto/${producto.ID_producto}`} className="btn btn-primary btn-sm me-2">
                                <i className="bi bi-pencil-fill text-dark"></i>
                              </Link>
                              <span className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#basicModal">
                                <i className="bi bi-trash-fill text-dark"></i>
                              </span>
                            </td> */}
                            <td>
                            <button className="btn btn-warning" onClick={() => handleEditar(producto)}>
                              Editar
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" onClick={() => handleEliminar(producto)}>
                              Eliminar
                            </button>
                          </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmProductos;
