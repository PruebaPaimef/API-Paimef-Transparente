// import express, { json, urlencoded } from 'express';
import e, {json, urlencoded} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import database from './data/index.js';
import usuarios from './routes/Usuarios/usuarios.js';
import usuarioPaimefNew from './routes/Paimef-Transparente/usuarios.js';
import accionPaimefNew from './routes/Paimef-Transparente/accion.js';
import gralPeriodoPaimefNew from './routes/Paimef-Transparente/general-periodo.js';
import login from './routes/paimef/login.js';
import accionPaimefOld from './routes/paimef/accion.js';
import usersPaimefOld from './routes/paimef/user.js';
import loginUsers from './routes/Sistema-Monitoreo/login/users.js';
import loginMonitoreo from './routes/Sistema-Monitoreo/login/login.js';
// Dip taciones
import BloquesCompetitividad from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/BloquesCompetitividad.js';
import Candidaturas from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/Candidaturas.js';
import DiputacionesElectas from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/DiputacionesElectas.js';
import DistritosMayor from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/DistritosMayor.js';
import ListaNominal from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/ListaNominal.js';
import PostulacionesInternas from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/PostulacionesInternas.js';
import TitularesSuplentes from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/TitularesSuplentes.js';
import universoAspirantes from './routes/Sistema-Monitoreo/diputaciones/procesoElectoral/universoAspirantes.js';
// Iniciamos Serviddor
const app = e()
// Iniciamos conexión a nuestra base de datos
database
// Configuramos las opciones de nuestro servidor
app.use(morgan('tiny'))
app.use(cors())
app.use(json())
app.use(urlencoded( { extended: true }))
// configuramos las rutas
app.get('/', ( req,res ) => {
    res.send('Por favor visita el siguiente enlace: plataforma.paimeftransparente.com')
})
// Usuarios
app.use('/api', usuarios)

// Paimef - transparene 2.0
app.use('/api', usuarioPaimefNew)
app.use('/api', accionPaimefNew)
app.use('/api', gralPeriodoPaimefNew)

// Logigin general
app.use('/api/login', login)


// Paimef Vieja versión
app.use('/api/paimef-old', accionPaimefOld)
app.use('/api/paimef-old', usersPaimefOld)


// Sistema de monitoreo

// Usuarios y Login
app.use('/api', loginUsers)
app.use('/api/sistema-monitoreo-login', loginMonitoreo)



// Diputaciones - Proceso Electoral 
app.use('/api', BloquesCompetitividad);
app.use('/api', Candidaturas);
app.use('/api', DiputacionesElectas);
app.use('/api', DistritosMayor);
app.use('/api', ListaNominal);
app.use('/api', PostulacionesInternas);
app.use('/api', TitularesSuplentes);
app.use('/api', universoAspirantes);




// Configuramos el puerto de salida de nuestro servidor
app.set('puerto', process.env.PORT || 3000 )
app.listen( app.get('puerto'), () => {
    console.log('Servidor IMM-GCCM, corriendo en puerto: ' + app.get('puerto'));
})