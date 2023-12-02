import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: [true, 'El titulo es requerido'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        require: [true, 'La decripcion es requerida'],
        trim: true,
    }
    
}, {
    timestamps: true,
})

// model.Task: de no existir crearlo 
export default models.Task || model('Task', taskSchema)