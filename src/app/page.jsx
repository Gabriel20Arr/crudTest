import React from 'react'
import { connectDB } from 'src/utils/mongoose';
import User from '../models/User.js'
import Link from 'next/link'

async function listUser () {
  connectDB()
  const users = await User.find()

  return users
}

async function page() {
  const users = await listUser()

  return ( 
    <div className='container mx-auto'>

      <table className='min-w-full bg-gray-800'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Nombre</th>
            <th className='px-4 py-2'>Correo Electrónico</th>
            <th className='px-4 py-2'>Contraseña</th>
            <th className='px-4 py-2'>Ubicacion</th>
            <th className='px-4 py-2'>Creacion</th>
            <th className='px-4 py-2'>Accion</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
              <tr key={user._id} className='border-b bg-gray-700 hover:bg-gray-600'>
                <td className='px-4 py-2'>{user.name}</td>
                <td className='px-4 py-2'>{user.email}</td>
                <td className='px-4 py-2'>{user.password}</td>
                <td className='px-4 py-2'>{user.location}</td>
                <td className='px-4 py-2'>
                   {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Fecha inválida"}
                </td>
                <Link className='px-1 py-2 bg-gray-500  rounded-lg text-black border w-full mx-auto' href={`/userr/${user._id}`}> 
                    <td className='px-4 py-2 '>form</td>
                </Link>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page