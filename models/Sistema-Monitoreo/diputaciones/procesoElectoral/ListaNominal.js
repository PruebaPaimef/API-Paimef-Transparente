import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const listaNominal = new Schema({
    mujeres: String,
    hombres:  String,
    totales: String,
    distrito: String,
    partido: String,
    periodo: String,
    usuarioId: String,
    fechaCreacion: { type: Date, default: Date.now },
})

// Convertimos el modelo

const DipPELN = sistemaMonitoreo.model('Dip-PE-Lista-Nominal', listaNominal )

export default  DipPELN
