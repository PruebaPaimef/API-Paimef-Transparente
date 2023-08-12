import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const postulacionesInternas = new Schema({
    mujeres: String,
    hombres: String,
    totales: String,
    periodo: String,
    partido: String,
    distrito: String,
    usuarioId: String,
    fechaCreacion: { type: Date, default: Date.now },
})

// Convertimos el modelo

const DipPEPI = sistemaMonitoreo.model('Dip-PE-Postulaciones-Internas', postulacionesInternas )

export default  DipPEPI
