import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const listaNominal = new Schema({


    hombres:  Number,
    mujeres: String,
    totales: String,
    distrito: String,
    partido: String,
    periodo: String,
    usuarioId: String,
    municipio: String,
    fechaCreacion: { type: Date, default: Date.now },

    
})

// Convertimos el modelo

const MunPELN = model('mun-pe-lista-nominal', listaNominal )

export default  MunPELN