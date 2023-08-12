import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const accionSchema = new Schema({
    nombre:{type: String, required: [true, 'Nombre obligatorio']},
    estado:String,
    descripcion:String,
    municipio:[{
        nombre: String,
        latitud: Number,
        longitud: Number
    }],
    periodo: {type: String, required: [true, 'Periodo obligatorio']},
    vertiente: {type: String, required: [true, 'Vertiente obligatoria'],trim: true, lowercase: true},
    accion: {type: String, required:[true, 'Acción obligatoria'], trim: true, lowercase: true},
    recurso: [{
        humano: Number,
        material: Number,
        totales: Number
    }],
    poblacion: [{
        mujeres: Number,
        hombres: Number,
        parientes: Number,
        totales: Number
    }],
    atencion: [{
       psicologica: Number,
       juridica: Number,
       trabajoSocial: Number,
       psicologicaInfantil: Number 
    }],
    perfil:String,
    usuarioId: String,
    codigoGeneral: String,
    date: {type: Date, default: Date.now},
    activo: {type:Boolean, default: true},
    diagnostico: String,
    materialComprobatorio:[{
        nombre: String,
        link: String
    }]
});


// Convertir en modelo 

const Accion = model('Accion',accionSchema);

export default Accion;