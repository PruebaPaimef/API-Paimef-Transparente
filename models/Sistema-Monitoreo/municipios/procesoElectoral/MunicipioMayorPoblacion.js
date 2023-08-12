import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const municipioMayorPoblacion = new Schema({


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

const MunPEMM = model('Mun-PE-Municipios-Mayor-Poblacion', municipioMayorPoblacion )

export default  MunPEMM