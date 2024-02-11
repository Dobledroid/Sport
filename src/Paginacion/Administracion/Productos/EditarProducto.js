import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const EditarProducto = ({
  productos,
  guardarProdEditando,
  guardarRecuperado,
  cerrarComponente,
}) => {
  const [id, setId] = useState(productos.ID_producto);
  const [nombre, setNombre] = useState(productos.nombre);
  const [descripcion, setDescripcion] = useState(productos.descripcion);
  const [precio, setPrecio] = useState(productos.precio);
  const [precioDescuento, setPrecioDescuento] = useState(productos.precioDescuento);
  const [stock, setStock] = useState("");
  const [categoriaId, setCategoriaId] = useState(productos.ID_categoria);
  const [subcategoriaId, setSubcategoriaId] = useState(productos.ID_subcategoria);
  const [marcaId, setMarcaId] = useState(productos.ID_marca);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [mostrarSubcategoria, setMostrarSubcategoria] = useState(false);
  const [mostrarMarca, setMostrarMarca] = useState(false);

  // Carga la lista de categorías cuando se monta el componente
  useEffect(() => {
    async function fetchCategorias() {
      const response = await fetch(
        "https://api-rest-luis-r45f.vercel.app/categorie"
      );
      const data = await response.json();
      setCategorias(data);
    }
    fetchCategorias();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(); // Crea un nuevo objeto FormData
    // formData.append("name", nombre);
    // formData.append("description", descripcion);
    // formData.append("price", precio);
    // formData.append("categorie", categoria);
    // formData.append("stock", stock);
    // if (imagen !== null) {
    //   formData.append("image", imagen);
    // }

    const response = await fetch(
      // `https://api-rest-proyecto.onrender.com/updateProducts/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      // console.log("Status 200 OK");

      const data = await response.json();
      // console.log(data)
      guardarProdEditando(null);
      guardarRecuperado(false);
      Swal.fire({
        title: "Actualizado",
        text: "Documentos actualizados",
        icon: "success",
        confirmButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      // console.log("Ha ocurrido un error");
      Swal.fire({
        title: "Error",
        text: "Documentos no actulizados",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  const handleCancelar = () => {
    cerrarComponente();
  };

  const handleCategoriaChange = async (event) => {
    const selectedCategoriaId = event.target.value;
    setCategoriaId(selectedCategoriaId);
    if (selectedCategoriaId !== '') {
      const response = await fetch(`http://localhost:3001/api/subcategoriasByIDCategoria/${selectedCategoriaId}`);
      const data = await response.json();
      setSubcategorias(data);
      setMostrarSubcategoria(true);

      const responseMarcas = await fetch(`http://localhost:3001/api/marcasByIDCategoria/${selectedCategoriaId}`);
      const dataMarcas = await responseMarcas.json();
      setMarcas(dataMarcas);
      setMostrarMarca(true);
    } else {
      setSubcategorias([]);
      setMostrarSubcategoria(false);
      setMarcas([]);
      setMostrarMarca(false);
    }
  };

  return (
    <div className='content container'>
      <div className="card my-5">
        <div class="card-body">
          <h5 class="card-title">Agregar Usuario</h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el nombre del producto"
                required
                minLength="3"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese la descripción del producto"
                required
                minLength="3"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese el precio del producto"
                required
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio Descuento</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese el precio después del descuento del producto"
                required
                value={precioDescuento}
                onChange={(event) => setPrecioDescuento(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Existencias</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese la existencia"
                required
                value={stock}
                onChange={(event) => setStock(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <select className="form-control" onChange={handleCategoriaChange}>
                <option value="">Seleccione una categoría</option>
                {categorias.map((cat) => (
                  <option key={cat.ID_categoria} value={cat.ID_categoria}>{cat.nombre}</option>
                ))}
              </select>
            </div>
            {mostrarSubcategoria && (
              <div className="mb-3">
                <label className="form-label">Subcategoría</label>
                <select className="form-control" value={subcategoriaId} onChange={(event) => setSubcategoriaId(event.target.value)}>
                  <option value="">Seleccione una Subcategoría</option>
                  {subcategorias.map((sub) => (
                    <option key={sub.ID_subcategoria} value={sub.ID_categoria}>{sub.nombre}</option>
                  ))}
                </select>
              </div>
            )}
            {mostrarMarca && (
              <div className="mb-3">
                <label className="form-label">Marca</label>
                <select className="form-control" value={marcaId} onChange={(event) => setMarcaId(event.target.value)}>
                  <option value="">Seleccione una Marca</option>
                  {marcas.map((marca) => (
                    <option key={marca.ID_marca} value={marca.ID_marca}>{marca.nombre}</option>
                  ))}
                </select>
              </div>
            )}
            <button className="btn btn-secondary" onClick={() => { cerrarComponente() }}>
              Regresar
            </button>
            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
