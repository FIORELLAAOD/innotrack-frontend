import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataPage = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos

  // Función para obtener los datos del backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/endpoint'); // Cambia esto si tu endpoint es diferente
      setData(response.data); // Guardar los datos en el estado
    } catch (error) {
      console.error('Error fetching data:', error); // Manejo de errores
    }
  };

  // Usar useEffect para llamar a fetchData cuando se monta el componente
  useEffect(() => {
    fetchData();
  }, []); // El array vacío significa que solo se ejecuta una vez al montar

  return (
    <div>
      <h1>Datos desde el Backend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Mostrar los datos en formato JSON
      ) : (
        <p>Cargando...</p> // Mensaje mientras se cargan los datos
      )}
    </div>
  );
};

export default DataPage;
