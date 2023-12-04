import React from 'react';
import { connectDB } from 'src/utils/mongoose';
import User from 'src/models/User.js'
import Link from 'next/link'


async function listUser() {
  connectDB();
  const users = await User.find()

  return users;
}



async function Home() {
  const users = await listUser();

  const uniqueLocations = [...new Set(users.map(user => user.location))];
  console.log(uniqueLocations);
  
  const locationToFilter = "Argentina"
  const filteredUsers = users.filter(user => user.location === locationToFilter);
    // console.log('hola:', filteredUsers);
  // console.log(users);
  return ( 
    <div>
      <div className=' flex flex-col justify-center items-center'>
      <h2 className='bg-blue-800 border rounded-lg p-2 font-bold '>Filters</h2>
      
        <ul className='flex container mx-auto p-2 justify-around'>
          <h3 className='bg-blue-800 p-2 rounded-lg '>Ubicacion</h3>
          {
            uniqueLocations.map((elem, index) => {
              return <li key={index} className='text-white'>{elem.location}</li>
            })
          }
          
          <h3 className='bg-blue-800 p-2 rounded-lg '>mundo</h3>
        </ul>
      </div>
    
      <table className='min-w-full bg-gray-800'>
        <thead>
          <tr>
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
          {users?.map((user, index) => (
              <tr key={user._id} className='border-b bg-gray-700 hover:bg-gray-600'>
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2'>{user.name}</td>
                <td className='px-4 py-2'>{user.email}</td>
                <td className='px-4 py-2'>{user.password}</td>
                <td className='px-4 py-2'>{user.location}</td>
                <td className='px-4 py-2'>
                   {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Fecha inválida"}
                </td>
                <td className='px-4 py-2'>
                  <Link href={`/userr/${user._id}`}>
                    <span className='px-1 py-2 bg-gray-500 rounded-lg text-black border w-full mx-auto'>form</span>
                  </Link>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home