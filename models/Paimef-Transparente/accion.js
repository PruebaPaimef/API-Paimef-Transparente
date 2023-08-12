import { Schema as _Schema } from 'mongoose';
const Schema = _Schema

import paimefTransparente from '../../data/conexiones.js';

const accionSchema = new Schema({
    estado: String,
    general: {
        nombre: String,
        descripcion: String,
        diagnostico: String,
        perfil: String,
        numeral: String,
    },
    periodo: String,
    vertiente: String,
    recursos: {
        humano: Number,
        material: Number,
        total: Number
    },
    beneficiarias: {
        mujeres: Number,
        hombres: Number,
        otros: Number,
        totales: Number
    },
    servicios: {
        psicologicos: Number,
        juridicos: Number,
        trabajoSocial: Number,
        psicologiaInfantil: Number
    },
    usuarioId: String,
    date: { type: Date, default: Date.now() },
    materialComprobatorio: [{
        nombre: String,
        enlace: String
    }],
    municipios: [{
        nombre: String,
        lat: Number,
        lon: Number
    }]
})

const Accion = paimefTransparente.model('Acciones-Vertientes', accionSchema )
export default Accion;