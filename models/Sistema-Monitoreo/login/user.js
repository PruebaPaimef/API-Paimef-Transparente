import { Schema as _Schema } from 'mongoose';
const Schema = _Schema;

import sistemaMonitoreo from '../../../data/conexiones.js';

import uniqueValidator from 'mongoose-unique-validator';


const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} rol no válido'
}

const userSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre es obligatorio']},
    email: {
        type: String, 
        required: [true, 'El correo es obligatorio'],
        unique:true
    },
    pass: {type: String, required: [true, 'Contraseña obligatoria']},
    date: {type: Date, default: Date.now},
    role: {type: String, default: 'USER', enum: roles},
    activo: {type: Boolean, default:true}
});

userSchema.plugin(uniqueValidator,{ message: 'Error, el {PATH} no se puede repetir.' });

// Eliminamos el pass de la vista humana
userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.pass;
    return obj;
   }

const Usuario = sistemaMonitoreo.model('Usuario3', userSchema);



export default Usuario;
