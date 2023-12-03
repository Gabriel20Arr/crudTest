import React from 'react'
import Link from 'next/link';


function Header() {
  return (
     <div className='flex justify-between p-2 mx-auto mb-10  rounded bg-gray-500 text-white'>
        <Link href={'/'}>
          <h1 className='hevor:cursor-pointer border-b'>
              CRUD Prueba
          </h1>
        </Link>

        <Link href={'/userr/new'}>
          <button className='bg-blue-800 rounded p-1 border'>
              Crear usuario
          </button>
        </Link>
    </div>
  )
}

export default Header