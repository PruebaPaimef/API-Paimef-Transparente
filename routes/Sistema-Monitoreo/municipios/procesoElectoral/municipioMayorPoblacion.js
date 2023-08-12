const express = require('express')
const router = express.Router()


// importamos nuestro modelo 
import MunicipiosMayorPoblacion from '../../../models/municipios/procesoElectoral/MunicipioMayorPoblacion.js'


// Agregamos un nuevo modelo 

// POST 
const url = '/municipios/proceso-electoral/nuevo/municipios-mayor-poblacion'
router.post(`${url}`, async( req, res ) => {
    
    const body = req.body
    try {
        const uaDB = await MunicipiosMayorPoblacion.create( body )
        res.status( 200 ).json( uaDB ) 
    } catch (error) {
        return res.status( 500 ).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

// Get todos los items
router.get( `${url}`, async( req, res ) => {
    try {
        const uaDB = await MunicipiosMayorPoblacion.find()
        res.json(uaDB)
    } catch (error) {
        return res.status( 500 ).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})


// Get parametros 
const getUrl = '/municipios/proceso-electoral/nuevo/municipios-mayor-poblacion/:municipio'
router.get( `${getUrl}`, async( req, res ) => {
    const distrito = req.params.distrito
    try {
        const uaDB = await MunicipiosMayorPoblacion.findOne({ distrito })
        res.json(uaDB)
    } catch (error) {
        return res.status( 500 ).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

// router.delete(`${getUrl}`, async( req, res ) => {
//     const distrito = req.params.distrito;
//     try {
//       const uaDB = await UniversoAspirantes.findByIdAndDelete({ distrito });
//       if(!notaDb){
//         return res.status(400).json({
//           mensaje: 'No se encontró el id indicado',
//           error
//         })
//       }
//       res.json(notaDb);  
//     } catch (error) {
//       return res.status(400).json({
//         mensaje: 'Ocurrio un error',
//         error
//       })
//     }
//   })




// Exportamos la configuración de nuestro modelo

module.exports = router