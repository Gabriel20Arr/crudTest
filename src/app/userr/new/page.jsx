'use client'
import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

// Componente de formulario para crear o actualizar usuarios
function Page() {
  const [ newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      location: ''
  })
    
  const router = useRouter()
  const params = useParams()

  // Función para obtener los detalles del usuario si se está editando
  const getUser = async () => {
    try {
      const res = await axios.get(`../../api/users/${params.id}`);
      const data = res.data;

      setNewUser({
        name: data.name,
        email: data.email,
        password: data.password,
        location: data.location,
      });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  };

  // Función para crear un nuevo usuario
  const createUsers = async () => {
      try {
          const res = await axios.post("../../api/users", 
              JSON.stringify(newUser),{
              headers: {
                  "Content-Type": "application/json"
              }
      })

      const data = await res.data;
      // si esta correcto lo redirecciona
      if(res.status === 200){
          router.push('/')
          router.refresh() 
      }

      } catch (error) {
          console.log(error);
      }
  }

   // Función para actualizar un usuario existente
  const updateUser = async () => {
      try {
          const res = await axios.put(`../../api/users/${params.id}`,
              JSON.stringify(newUser),{
                  headers:{ 
                      "Content-Type": "application/json"
                  }
              })

          const date = await res.date;
          router.push('/')
          router.refresh()
      } catch (error) {
          console.log(error);            
      }
  }


  // Función para manejar la eliminación de un usuario
  const handleDelete = async () => {
      Swal.fire({
      title: '',
      text: 'Estas seguro de eliminar?',
      position: "center",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si',
      confirmButtonColor: '#3498db',

      denyButtonText: 'Cancelar',
      denyButtonColor: '#e74c3c'
      }).then(async (result) => {
          if (result.isConfirmed) {
              const resData = await axios.delete(`../../api/users/${params.id}`)

              router.push('/')
              router.refresh()
          } else if (result.isDenied) {
              router.push('/userr/new')
          }
      })
  }

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!newUser.name || !newUser.email || !newUser.password || !newUser.location) {
      // Agrega una validación para asegurarte de que todos los campos estén completos
      Swal.fire({
          title: 'Error',
          text: 'Por favor, completa todos los campos.',
          icon: 'error',
          confirmButtonColor: '#3498db'
      });
      } else {
      if (!params.id) {
          createUsers();
      } else {
          updateUser();
      }
      }
  };
  
   // Función para manejar los cambios en los campos del formulario
  const handlerChange = (e) => {
      setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  // Efecto secundario para obtener los detalles del usuario al cargar la página
  useEffect(() => {
      if(params.id) {
          getUser()
      }
  }, [getUser, params.id])
    
  return (
    <div  
        className='
            h-screen
            flex 
            flex-col
            justify-center 
            items-center 
            text-black 
            bg-gray-900
        '
    >
            <h1 className='p-2 text-white font-bold text-lg border-b-2 '>
                {
                    !params.id ? "Crear usuario" : "Acualizar usuario"
                }
            </h1>

        <form className='grid grid-cols-2 gap-2 text-white' onSubmit={handleSubmit}>
            <input onChange={handlerChange} className='p-4 rounded-lg my-4 bg-gray-700'  type='text' name='name' placeholder='Nombre' value={newUser.name}/>
            <input onChange={handlerChange} className='p-4 rounded-lg my-4 bg-gray-700'  type='email' name='email' placeholder='Correo' value={newUser.email}/>
            <input onChange={handlerChange} className='p-4 rounded-lg my-4 bg-gray-700'  type='text' name='password' placeholder='Contraseña' value={newUser.password}/>
            {/* <input onChange={handlerChange} className='p-4 rounded-lg my-4 bg-gray-700'  type='text' name='location' placeholder='Ubicacion' value={newUser.location}/> */}
            <select onChange={handlerChange} className='p-4 rounded-lg my-4 bg-gray-700'  type='text' name='location' placeholder='Ubicacion' value={newUser.location}>
                <option disabled value={''}>Ubicacion</option>
                <option>Argentina</option>
                <option>Venezuela</option>
                <option>Chile</option>
                <option>Uruguay</option>
                <option>Colombia</option>
                <option>Mexico</option>
                <option>Otros</option>
            </select>

            <button type='submit' className='p-2 rounded-lg bg-green-500 text-white'> 
                {
                    !params.id ? 'Crear' : "Actualizar"
                }
            </button>

            <button 
                onClick={handleDelete}
                className='bg-red-500 p-1 rounded-lg text-white'
            >
                Eliminar
            </button>

        </form>
    </div>
  )
}
export default Page;