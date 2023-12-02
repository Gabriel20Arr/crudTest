import { NextResponse } from "next/server";

export function GET (res, { params }){
    const id = params.id;

    return NextResponse.json({
        message: `Obteniendo tarea ${id}`
    })
}

export function PUT (res, { params }) {
    const id = params.id;
    
    return NextResponse.json({
        message: `Editando Tarea ${id}`
    })
}

export function DELETE (res, { params }) {
    const id = params.id;
    
    return NextResponse.json({
        message: `Eliminando tarea ${id}`
    })
}
