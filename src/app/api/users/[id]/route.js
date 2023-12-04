import { NextResponse } from "next/server";
import { connectDB } from "src/utils/mongoose";
import User from "src/models/User";

// Manejador de la solicitud GET para obtener un usuario por ID
export async function GET(res, { params }) {
  try {
    // Conectar a la base de datos
    connectDB();

    const id = params.id;
    // Buscar un usuario por ID
    const userFound = await User.findById(id);

    // Si el usuario no se encuentra, devolver una respuesta JSON con estado 404
    if (!userFound) {
      return NextResponse.json(
        {
          message: "Usuario no encontrado"
        },
        {
          status: 404
        }
      );
    }

    // Devolver el usuario encontrado en formato JSON
    return NextResponse.json(userFound);
  } catch (error) {
    // Manejar errores y devolver una respuesta JSON con estado 400
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}

// Manejador de la solicitud PUT para actualizar un usuario por ID
export async function PUT(request, { params }) {
  try {
    const id = params.id;

    // Obtener los datos de la solicitud en formato JSON
    const data = await request.json();

    // Actualizar el usuario por ID y obtener el usuario actualizado
    const userUpdated = await User.findByIdAndUpdate(id, data, {
      new: true
    });

    // Devolver el usuario actualizado en formato JSON
    return NextResponse.json(userUpdated);
  } catch (error) {
    // Manejar errores y devolver una respuesta JSON con estado 400
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}

// Manejador de la solicitud DELETE para eliminar un usuario por ID
export async function DELETE(res, { params }) {
  const id = params.id;

  try {
    // Eliminar el usuario por ID y obtener el usuario eliminado
    const userDeleted = await User.findByIdAndDelete(id);

    // Si el usuario no se encuentra, devolver una respuesta JSON con estado 404
    if (!userDeleted) {
      return NextResponse.json(
        {
          message: "Usuario no encontrado"
        },
        {
          status: 404
        }
      );
    }

    // Devolver el usuario eliminado en formato JSON con un mensaje adicional
    return NextResponse.json(userDeleted, {
      message: "Usuario eliminado"
    });
  } catch (error) {
    // Manejar errores y devolver una respuesta JSON con estado 400
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}
