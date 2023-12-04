import React from 'react'
import Link from 'next/link';


function Header() {
  return (
     <div className='flex justify-between p-2 mx-auto bg-blue-600 text-white'>
        <Link href={'/'}>
          <h1 className='hover:cursor-pointer hover:border-b font-bold text-lg'>
              CRUD Prueba
          </h1>
        </Link>

        <Link href={'/userr/new'}>
          <button className='bg-white text-black rounded hover:font-bold p-1 border'>
              Crear usuario
          </button>
        </Link>
    </div>
  )
}

export default Header