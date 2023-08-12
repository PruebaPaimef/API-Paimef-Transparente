import { Schema as _Schema } from 'mongoose';
const Schema = _Schema

import paimefTransparente from '../../data/conexiones.js';

const tipoUsuario = {
    values: ['ADMIN','USER'],
    message: '{VALUE} ron no válido'
}

const userSchema = new Schema({
    nombre: String,
    email: {
        type: String,
        unique: true
    },
    pass: String,
    estado: String,
    date: { type: Date, default: Date.now },
    tipoUsuario: { type: String, default: 'USER', enum: tipoUsuario },
    activo: { type: Boolean, default: true }
})
const Usuario = paimefTransparente.model('Usuario', userSchema)
export default Usuario;