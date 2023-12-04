import React from 'react';
import { connectDB } from 'src/utils/mongoose';
import User from 'src/models/User.js'
import Link from 'next/link'

// Función asincrónica para obtener la lista de usuarios desde la base de datos
async function listUser() {
  connectDB();
  const users = await User.find();
  return users;
}

// Componente principal de la página Home
async function Home() {
  // Obtiene la lista de usuarios utilizando la función definida anteriormente
  const users = await listUser();

  // Cuenta la cantidad de usuarios por ubicación
  const locationCount = users.reduce((count, user) => {
    const location = user.location;
    count[location] = (count[location] || 0) + 1;
    return count;
  }, {});

  // Función para renderizar la cuenta de usuarios por ubicación
  const renderLocationCount = () => {
    return Object.keys(locationCount).map((location) => (
      <div key={location}>
        <span className='font-bold'>{location}: </span>
        <span className='border-b px-2 border-gray-400'>{locationCount[location]}</span>
      </div>
    ));
  };

  return ( 
    <div>
      {/* Tabla que muestra la lista de usuarios */}
      <table className='min-w-full mt-10'>
        <thead>
          <tr className='min-w-full bg-blue-700 text-white border border-blue-800'>
            <th className='px-4 py-2'>#</th>
            <th className='px-4 py-2'>Nombre</th>
            <th className='px-4 py-2'>Correo Electrónico</th>
            <th className='px-4 py-2'>Contraseña</th>
            <th className='px-4 py-2'>Ubicacion</th>
            <th className='px-4 py-2'>Creacion</th>
            <th className='px-4 py-2'>Accion</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea sobre la lista de usuarios y crea filas de la tabla */}
          {users?.map((user, index) => (
            <tr key={user._id} className='border border-gray-300 bg-white-800 hover:text-white hover:bg-blue-500'>
              <td className='px-4 py-2'>{index + 1}</td>
              <td className='px-4 py-2'>{user.name}</td>
              <td className='px-4 py-2'>{user.email}</td>
              <td className='px-4 py-2'>{user.password}</td>
              <td className='px-4 py-2'>{user.location}</td>
              <td className='px-4 py-2'>
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Fecha inválida"}
              </td>
              <td className='hover:bg-blue-700 border border-gray-300 border-t-blue-800 hover:font-bold text-center'>
                {/* Enlace que redirige a la página de formulario para el usuario específico */}
                <Link className='block w-full h-full' href={`/userr/${user._id}`}>
                  form
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sección que muestra la cantidad de usuarios por ubicación */}
      <div className='flex flex-col border-t border-gray-300  mt-20 p-2'>
        <h3 className='px-2 rounded border-b  mx-auto font-bold text-lg bg-blue-600 text-white'>Mas habitado</h3>
        <div className='flex flex-wrap border-b mt-5 p-2 border-gray-300 justify-around'>
          {renderLocationCount()}
        </div>
      </div>
    </div>
  );
}

export default Home;
