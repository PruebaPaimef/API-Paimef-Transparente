import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const infoSchema = new Schema({
    estado: String,
    periodo: {type: String, required: [true, 'Periodo necesario']},
    gastoTotal: {type: Number, required: [true, 'Campo Obligatorio']},
    totalVa: Number,
    metaVa: [{
        nombre: {type: String, trim: true, lowercase: true},
        humano: Number,
        material: Number,
        total: {type: Number, trim: true},
        vertiente: String
    }],
    totalVb: Number,
    metaVb: [{
        nombre: {type: String, trim: true, lowercase: true},
        humano: Number,
        material: Number,
        total: {type: Number, trim: true},
        vertiente: String
    }],
    totalVc: Number,
    metaVc: [{
        nombre: {type: String, trim: true, lowercase: true},
        humano: Number,
        material: Number,
        total: {type: Number, trim: true},
        vertiente: String
    }],
    totalTransversal: {type: Number, required: [true, 'Campo Obligatorio']},
    usuarioId: String,
    date: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true},
    resultados: [{
        nombre: String,
        link: String
    }]

});


// Convertir en modelo 

const Info = model('Info',infoSchema);

export default Info;