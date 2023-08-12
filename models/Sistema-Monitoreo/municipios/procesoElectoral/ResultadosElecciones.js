import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const resultadosElecciones = new Schema({


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

const MunPERE = model('Mun-PE-Resultado-Elecciones', resultadosElecciones )

export default  MunPERE