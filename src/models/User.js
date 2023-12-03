import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'El nombre es requerido'],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        require: [true, 'El email es requerida'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
    },
    location: {
        type: String,
        require: [true,  'La ubicacion es requerida']
    }
    
}, {
    timestamps: true,
})

// model.Task: de no existir crearlo 
export default models.User || model('User', userSchema)