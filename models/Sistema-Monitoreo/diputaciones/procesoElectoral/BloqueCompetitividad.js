import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const bloqueCompetitividad = new Schema({
    
    hombres:  String,
    mujeres: String,
    totale: String,
    distrito: String,
    partido: String,
    bloque: String, 
    periodo: String,
    fechaCreacion: { type: Date, default: Date.now },
    usuarioId: String,
    
})

// Convertimos el modelo

const DipPEBC = sistemaMonitoreo.model('Dip-PE-Bloque-Competitividad', bloqueCompetitividad )

export default DipPEBC
