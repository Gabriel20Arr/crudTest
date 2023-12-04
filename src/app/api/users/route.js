import { NextResponse } from "next/server";
import { connectDB } from "src/utils/mongoose";
import User from "src/models/User";

// Maneja la solicitud GET para obtener la lista de usuarios
export async function GET() {
  connectDB();
  
  // Consulta todos los usuarios en la base de datos
  const users = await User.find();
  
  // Retorna la lista de usuarios como una respuesta JSON
  return NextResponse.json(users);
}

// Maneja la solicitud POST para crear un nuevo usuario
export async function POST(request) {
  try {
    // Obtiene los datos del cuerpo de la solicitud
    const data = await request.json();
    
    // Crea un nuevo usuario con los datos proporcionados
    const newUser = new User(data);
    
    // Guarda el nuevo usuario en la base de datos
    const savedUser = await newUser.save();
    
    // Retorna el nuevo usuario como una respuesta JSON
    return NextResponse.json(savedUser);
  } catch (error) {
    // Maneja los errores y retorna una respuesta JSON con el mensaje de error y el código de estado 400
    return NextResponse.json(error.message, {
      status: 400
    });
  }
}
