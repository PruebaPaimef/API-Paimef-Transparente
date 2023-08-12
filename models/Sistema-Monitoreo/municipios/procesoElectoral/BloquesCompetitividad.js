import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const bloquesCompetitividad = new Schema({
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

const MunPEBC = model('Mun-PE-Bloque-Competitividad', bloquesCompetitividad )

export default  MunPEBC