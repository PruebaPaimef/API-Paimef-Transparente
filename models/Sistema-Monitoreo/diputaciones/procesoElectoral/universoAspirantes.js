import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const universoAspirantes = new Schema({
    hombres:  Number,
    mujeres: Number,
    total: Number,
    fechaCreacion: { type: Date, default: Date.now },
    distrito: String,
    usuarioId: String,
    periodo: String,
    partido: String
})

// Convertimos el modelo

const DipPEUA = sistemaMonitoreo.model('Dip-PE-Universo-Aspirantes', universoAspirantes )

export default  DipPEUA

