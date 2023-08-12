import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

import conn from '../../../../data/conexiones.js'

const candidaturas = new Schema({


    hombres:  Number,
    mujeres: String,
    totales: String,
    distrito: String,
    partido: String,
    periodo: String,
    usuarioId: String,
    fechaCreacion: { type: Date, default: Date.now },

    
})

// Convertimos el modelo

const DipPEC = model('Dip-PE-Candidaturas', candidaturas )

export default  DipPEC