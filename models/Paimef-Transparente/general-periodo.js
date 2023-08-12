import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import paimefTransparente from '../../data/conexiones.js'

const generalSchema = new Schema({
    estado: String,
    periodo: String,
    gastos: {
        total: Number,
        vertienteA: Number,
        vertienteB: Number,
        vertienteC: Number,
        transversal: Number
    },
    usuarioId: String,
    date: { type: Date, default: Date.now },
    comprobables: [{
        nombre: String,
        enlace: String
    }]
})

const GeneralPeriodo = paimefTransparente.model('Informacion-General-Periodo', generalSchema )

export default GeneralPeriodo