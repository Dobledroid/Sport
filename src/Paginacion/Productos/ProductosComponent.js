import React from 'react';

const ProductosComponent = () => {
  // Objeto con información de productos
  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 10.99,
      imageUrl: 'https://res.cloudinary.com/dubearvua/image/upload/v1706082767/h4kepwaigt9mfi02wnma.jpg',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 19.99,
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCBgZKWLHjpa4MmZLlv7L0PA&psig=AOvVaw1NeewnHuzBtOJxv2g2QGBe&ust=1706503725960000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCD5Pij_4MDFQAAAAAdAAAAABAF',
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 14.99,
      imageUrl: 'https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj',
    },
  ];

  return (
    <div>
      <h1>Productos</h1>
      <div className="productos-list">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <h2>{producto.nombre}</h2>
            <img src={producto.imageUrl} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosComponent;
