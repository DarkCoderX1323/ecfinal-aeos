import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    razonSocial: '',
    rubro: ''
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/empresas');
      setEmpresas(response.data);
    } catch (error) {
      console.error('Error fetching empresas:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddEditSubmit = async event => {
    event.preventDefault();
    if (editing) {
      try {
        await axios.put(`http://localhost:8081/api/empresas/${formData.id}`, formData);
        setEditing(false);
      } catch (error) {
        console.error('Error updating empresa:', error);
      }
    } else {
      try {
        await axios.post('http://localhost:8081/api/empresas', formData);
      } catch (error) {
        console.error('Error creating empresa:', error);
      }
    }
    setFormData({
      id: null,
      nombre: '',
      razonSocial: '',
      rubro: ''
    });
    fetchEmpresas();
  };

  const handleEdit = empresa => {
    setFormData({
      id: empresa.id,
      nombre: empresa.nombre,
      razonSocial: empresa.razonSocial,
      rubro: empresa.rubro
    });
    setEditing(true);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8081/api/empresas/${id}`);
      fetchEmpresas();
    } catch (error) {
      console.error('Error deleting empresa:', error);
    }
  };

  return (
    <div className="table-container">
      <h1>Lista de Empresas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Razón Social</th>
            <th>Rubro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(empresa => (
            <tr key={empresa.id}>
              <td>{empresa.nombre}</td>
              <td>{empresa.razonSocial}</td>
              <td>{empresa.rubro}</td>
              <td>
                <button onClick={() => handleEdit(empresa)}>Editar</button>
                <button onClick={() => handleDelete(empresa.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{editing ? 'Editar Empresa' : 'Agregar Empresa'}</h2>
      <form onSubmit={handleAddEditSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="razonSocial"
          placeholder="Razón Social"
          value={formData.razonSocial}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="rubro"
          placeholder="Rubro"
          value={formData.rubro}
          onChange={handleInputChange}
        />
        <button type="submit">{editing ? 'Guardar Cambios' : 'Agregar Empresa'}</button>
      </form>
    </div>
  );
};

export default Empresas;
