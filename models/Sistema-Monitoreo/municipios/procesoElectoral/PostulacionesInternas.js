import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const postulacionesInternas = new Schema({


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

const MunPEPI = model('Mun-PE-Postulaciones-Internas', postulacionesInternas )

export default  MunPEPI