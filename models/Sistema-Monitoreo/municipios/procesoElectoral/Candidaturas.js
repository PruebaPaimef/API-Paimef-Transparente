import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const candidaturas = new Schema({

    hombres:  Number,
    mujeres: Number,
    total: Number,
    fechaCreacion: { type: Date, default: Date.now },
    municipio: String,
    usuarioId: String,
    periodo: String,
    partido: String

    
})

// Convertimos el modelo

const MunPECa = model('Mun-PE-Candidaturas', candidaturas )

export default  MunPECa