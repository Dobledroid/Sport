import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";

const AgregarProducto = ({ guardarRecuperado, cerrarComponente }) => {
	const [nombre, setNombre] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [precio, setPrecio] = useState('');
	const [precioDescuento, setPrecioDescuento] = useState('');
	const [stock, setStock] = useState('');
	const [categoriaId, setCategoriaId] = useState('');
	const [subcategoriaId, setSubcategoriaId] = useState('');
	const [marcaId, setMarcaId] = useState('');
	const [categorias, setCategorias] = useState([]);
	const [subcategorias, setSubcategorias] = useState([]);
	const [marcas, setMarcas] = useState([]);
	const [mostrarSubcategoria, setMostrarSubcategoria] = useState(false);
	const [mostrarMarca, setMostrarMarca] = useState(false);

	useEffect(() => {
		async function getCategorias() {
			const response = await fetch("http://localhost:3001/api/categorias-productos");
			const data = await response.json();
			setCategorias(data);
		}
		getCategorias();
	}, []);

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

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("name", nombre);
		formData.append("description", descripcion);
		formData.append("price", precio);
		formData.append("price", precioDescuento);
		formData.append("categorie", categoriaId);
		formData.append("subcategoria", subcategoriaId);
		formData.append("marca", marcaId);
		formData.append("stock", stock);

		const response = await fetch("https://api-rest-proyecto.onrender.com/products", {
			method: "POST",
			body: formData,
		});

		if (response.status === 200) {
			const data = await response.json();
			guardarRecuperado((r) => !r);

			Swal.fire({
				title: "Insertado",
				text: "Documento insertado con éxito",
				icon: "success",
				confirmButtonText: "Cerrar",
			}).then((result) => {
				if (result.isConfirmed) {
					cerrarComponente();
				}
			});
		} else {
			Swal.fire({
				title: "Error",
				text: "Documentos no insertados",
				icon: "error",
				confirmButtonText: "Cerrar",
			})
		}
	};

	return (
		<>
			<div className='content container'>
				<div className="card my-5">
					<div className="card-body">
						<h5 className="card-title">Agregar Producto</h5>
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
		</>
	);
};

export default AgregarProducto;
