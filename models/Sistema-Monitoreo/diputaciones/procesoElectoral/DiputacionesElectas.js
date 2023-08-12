import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const diputacionesElectas = new Schema({
    fechaCreacion: { type: Date, default: Date.now },
    nombre: String,
    sexo: String,
    partido:String,
    distrito: String,
    usuarioId: String,
    periodo: String
})

// Convertimos el modelo

const DipPEDE = sistemaMonitoreo.model('Dip-PE-Diputaciones-Electas', diputacionesElectas )

export default  DipPEDE
