"use client"
import { useState } from 'react';
import { nanoid } from 'nanoid'; // Para generar un ID único

type FormData = {
  accountNumber: string;
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  address: string;
  balance: number;
};

const CustomerForm = () => {
  const [formData, setFormData] = useState<FormData>({
    accountNumber: nanoid(10), // Genera automáticamente un ID único
    name: '',
    lastName: '',
    age: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    address: '',
    balance: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'balance' || name === 'age' ? Number(value) : value,
    });
  };

  const handleSubmit = () => {
    // Validación de longitud de caracteres y campos obligatorios
    if (!formData.name || !formData.lastName || !formData.address || formData.age === 0) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    if (formData.name.length > 30 || formData.lastName.length > 30) {
      alert('El nombre y apellidos deben tener un máximo de 30 caracteres.');
      return;
    }
    if (formData.address.length > 100) {
      alert('La dirección debe tener un máximo de 100 caracteres.');
      return;
    }
    if (formData.balance < -500) {
      alert('El balance no puede ser menor que -500 USD.');
      return;
    }

    // Aquí iría la lógica para enviar los datos a la base de datos
    alert('Datos enviados correctamente.');
  };

  return (
    <div className="p-4">
      <label>Número de cuenta:</label>
      <input
        name="accountNumber"
        type="text"
        value={formData.accountNumber}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        disabled // Desactiva la edición manual del ID generado
      />

      <label>Nombre:</label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label>Apellidos:</label
      >
      <input
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label>Edad:</label>
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label>País:</label>
      <select name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full mb-2">
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Brasil">Brasil</option>
      </select>

      <label>Ciudad:</label>
      <select name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full mb-2">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Santiago">Santiago</option>
        <option value="Sao Paulo">Sao Paulo</option>
      </select>

      <label>Dirección:</label>
      <input
        name="address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <label>Balance:</label>
      <input
        name="balance"
        type="number"
        value={formData.balance}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <div className="flex gap-2">
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          Confirmar
        </button>
        <button className="bg-gray-500 text-white p-2 rounded">Cancelar</button>
      </div>
    </div>
  );
};

export default CustomerForm;
