import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Esquema/Header';
import Footer from '../../../Esquema/Footer';
import Swal from "sweetalert2";

const AgregarProducto = () => {
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
	const [imagen, setImagen] = useState(null);

	const [precioFinal, setPrecioFinal] = useState('');
	const [descuento, setDescuento] = useState('');


	const navigate = useNavigate();

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
		formData.append("nombre", nombre);
		formData.append("descripcion", descripcion);
		formData.append("precio", precio);
		formData.append("precioDescuento", precioDescuento);
		formData.append("existencias", stock);
		formData.append("ID_categoria", categoriaId);
		formData.append("ID_subcategoria", subcategoriaId);
		formData.append("ID_marca", marcaId);
		formData.append("imagen", imagen);

		const response = await fetch("http://localhost:3001/api/upload-product", {
			method: "POST",
			body:formData
		});
		const data = await response.json();
		console.log(data.smg)
		if (response.status === 200) {
			const data = await response.json();
			console.log("data_insertado", data)
			Swal.fire({
				title: "Insertado",
				text: "Registro insertado con éxito",
				icon: "success",
				confirmButtonText: "Cerrar",
			});
			navigate("/admProductos")
		} else {
			Swal.fire({
				title: "Error",
				text: "Registro no insertados",
				icon: "error",
				confirmButtonText: "Cerrar",
			})
		}
	};

	const calcularPrecioFinal = () => {
		if (!precio || !descuento) {
			setPrecioFinal('');
			return;
		}

		const descuentoDecimal = descuento / 100;
		const precioFinalCalculado = precio * (1 - descuentoDecimal);
		setPrecioFinal(precioFinalCalculado);
		setPrecioDescuento(precioFinalCalculado);
	};



	return (
		<>
			<Header />
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
								<textarea
									className="form-control"
									placeholder="Ingrese la descripción del producto"
									required
									minLength="3"
									value={descripcion}
									onChange={(event) => setDescripcion(event.target.value)}
								></textarea>
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

							<div className="mb-3 d-flex justify-content-end">
								<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
									Calcular descuento %
								</button>

								<div className="modal" id="miModal" tabIndex="-1">
									<div className="modal-dialog modal-dialog-centered">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title">Calculadora de Descuentos</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<div className="mb-3">
													<label className="form-label">Precio</label>
													<input
														type="number"
														className="form-control"
														placeholder="Ingrese el precio después del descuento"
														value={precio}
														onChange={(event) => setPrecio(event.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label className="form-label">Descuento (%)</label>
													<input
														type="number"
														className="form-control"
														placeholder="Ingrese el descuento en porcentaje"
														value={descuento}
														onChange={(event) => setDescuento(event.target.value)}
													/>
												</div>
												<div className="mb-3">
													<label className="form-label">Precio Final</label>
													<input
														type="text"
														className="form-control"
														placeholder="Precio final después del descuento"
														value={precioFinal}
														readOnly
													/>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
												<button type="button" className="btn btn-primary" onClick={calcularPrecioFinal}>Calcular</button>
											</div>
										</div>
									</div>
								</div>
							</div>


							<div className="mb-3">
								<label className="form-label">Precio del producto con descuento</label>
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
											<option key={sub.ID_subcategoria} value={sub.ID_subcategoria}>{sub.nombre}</option>
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
							<div className="mb-3">
								<label>Imagen</label>
								<input
									type="file"
									required
									accept="image/*" // Agrega el atributo "accept" para limitar la selección de archivos a imágenes
									className="form-control"
									onChange={(event) => {
										const selectedFile = event.target.files[0];
										// Valida si el archivo seleccionado es una imagen y si su tamaño es menor a 3 MB
										if (selectedFile && selectedFile.type.includes("image/") && selectedFile.size <= 3 * 1024 * 1024) {
											setImagen(selectedFile);
										} else {
											alert("Por favor selecciona una imagen con un tamaño menor a 3 MB.");
											event.target.value = null;
										}
									}}
								/>
							</div>
							<button className="btn btn-secondary me-3" onClick={() => navigate('/admProductos')}>
								Regresar
							</button>
							<button type="submit" className="btn btn-primary">Guardar</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AgregarProducto;
