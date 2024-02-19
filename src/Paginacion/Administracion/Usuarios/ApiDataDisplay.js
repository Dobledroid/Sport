import React, { useState, useEffect } from 'react';

const ApiDataDisplay = () => {
  // Estado para almacenar los datos obtenidos de la API
  const [apiData, setApiData] = useState(null);
  // Estado para controlar si se está cargando la información
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      // Realizar la solicitud a tu API
      const response = await fetch('https://api-rest-sport.vercel.app/api/users');
      // Verificar si la respuesta es exitosa
      if (response.ok) {
        // Convertir la respuesta a formato JSON
        const data = await response.json();
        // Actualizar el estado con los datos obtenidos
        setApiData(data);
      } else {
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error('Error al obtener los datos de la API');
      }
    } catch (error) {
      // Manejar errores de solicitud
      console.error('Error de solicitud:', error);
    } finally {
      // Indicar que la carga ha terminado
      setLoading(false);
    }
  };

  // Efecto para ejecutar la función de obtención de datos cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []); // El segundo argumento vacío indica que el efecto solo se ejecuta una vez, al montar el componente

  return (
    <div>
      <h2>Resultado de la API:</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        // Mostrar los datos obtenidos de la API
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      )}
    </div>
  );
};

export default ApiDataDisplay;
