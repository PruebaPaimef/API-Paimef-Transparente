import { Router } from 'express'
const router = Router()


// importamos nuestro modelo 
import TitularesSuplentes from '../../../../models/Sistema-Monitoreo/diputaciones/procesoElectoral/TitularesSuplentes.js'


// Agregamos un nuevo modelo 

// POST 
const url = '/diputaciones/proceso-electoral/nuevo/titulares-suplentes'
router.post(`${url}`, async( req, res ) => {
    
    const body = req.body
    try {
        const uaDB = await TitularesSuplentes.create( body )
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
        const uaDB = await TitularesSuplentes.find()
        res.json(uaDB)
    } catch (error) {
        return res.status( 500 ).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})


// Get parametros 
const getUrl = '/diputaciones/proceso-electoral/nuevo/titulares-suplentes/:distrito'
router.get( `${getUrl}`, async( req, res ) => {
    const distrito = req.params.distrito
    try {
        const uaDB = await TitularesSuplentes.findOne({ distrito })
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

export default router