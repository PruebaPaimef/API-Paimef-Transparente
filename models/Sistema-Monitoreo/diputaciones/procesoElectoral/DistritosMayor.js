import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const distritosMayorPoblacion = new Schema({
    
    hombres:  Number,
    mujeres: Number,
    totales: Number,
    distrito: String,
    periodo: String,
    usuarioId: String,
    fechaCreacion: { type: Date, default: Date.now }

})

// Convertimos el modelo

const DipPEDMP = sistemaMonitoreo.model('Dip-PE-Distritos-Mayor-Poblacion', distritosMayorPoblacion )

export default  DipPEDMP
 