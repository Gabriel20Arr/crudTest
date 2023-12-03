import { NextResponse } from "next/server";
import { connectDB } from "src/utils/mongoose"
import User from "src/models/User";

export async function GET (res, { params }){
    try {
        connectDB()
    
        const id = params.id;
        const UserFound = await User.findById(id)

        if(!UserFound) 
            return NextResponse.json({
            message: "Usuario no encontrado"
        }, {
            status: 404
        })

        return NextResponse.json(UserFound)

    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function PUT (request, { params }) {
    try {
        const id = params.id;

        const data = await request.json()
        console.log(data);

        const userUpdated = await User.findByIdAndUpdate(id, data, {
        new: true
        })

        return NextResponse.json(userUpdated)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
    
}

export async function DELETE (res, { params }) {
    const id = params.id;

    try {
        const userDeleted = await User.findByIdAndDelete(id)

        if(!userDeleted) return NextResponse.json({
            message: "Usuario no encontrado"}, {
                status: 404
            })
        
        return NextResponse.json(userDeleted, { message: "Usuario eliminado"})
        
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}
