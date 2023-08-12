import { Schema as _Schema } from 'mongoose'
const Schema = _Schema

import sistemaMonitoreo from '../../../../data/conexiones.js'

const titularesSuplentes = new Schema({
    
    titular: String,
    sexoTitular: String,
    suplente: String,
    sexoSuplente: String,
    partido: String,
    periodo: String,
    distrito: String,
    fechaCreacion: { type: Date, default: Date.now },
    usuarioId: String,
})

// Convertimos el modelo

const DipPETS = sistemaMonitoreo.model('Dip-PE-Titulares-Suplentes', titularesSuplentes )

export default  DipPETS
