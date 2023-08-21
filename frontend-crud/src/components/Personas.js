import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Personas = () => {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    dni: '',
    sexo: '',
    edad: 0,
    numero: ''
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/personas');
      setPersonas(response.data);
    } catch (error) {
      console.error('Error fetching personas:', error);
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
        await axios.put(`http://localhost:8081/api/personas/${formData.id}`, formData);
        setEditing(false);
      } catch (error) {
        console.error('Error updating persona:', error);
      }
    } else {
      try {
        await axios.post('http://localhost:8081/api/personas', formData);
      } catch (error) {
        console.error('Error creating persona:', error);
      }
    }
    setFormData({
      id: null,
      nombre: '',
      dni: '',
      sexo: '',
      edad: 0,
      numero: ''
    });
    fetchPersonas();
  };

  const handleEdit = persona => {
    setFormData({
      id: persona.id,
      nombre: persona.nombre,
      dni: persona.dni,
      sexo: persona.sexo,
      edad: persona.edad,
      numero: persona.numero
    });
    setEditing(true);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8081/api/personas/${id}`);
      fetchPersonas();
    } catch (error) {
      console.error('Error deleting persona:', error);
    }
  };

  return (
    <div className="table-container">
      <h1>Lista de Personas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Sexo</th>
            <th>Edad</th>
            <th>Número</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.map(persona => (
            <tr key={persona.id}>
              <td>{persona.nombre}</td>
              <td>{persona.dni}</td>
              <td>{persona.sexo}</td>
              <td>{persona.edad}</td>
              <td>{persona.numero}</td>
              <td>
                <button onClick={() => handleEdit(persona)}>Editar</button>
                <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{editing ? 'Editar Persona' : 'Agregar Persona'}</h2>
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
          name="dni"
          placeholder="DNI"
          value={formData.dni}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="sexo"
          placeholder="Sexo"
          value={formData.sexo}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={formData.edad}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
          onChange={handleInputChange}
        />
        <button type="submit">{editing ? 'Guardar Cambios' : 'Agregar Persona'}</button>
      </form>
    </div>
  );
};

export default Personas;
