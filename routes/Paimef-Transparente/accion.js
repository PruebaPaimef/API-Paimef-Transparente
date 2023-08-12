import { Router } from 'express';
const router = Router()

import Accion from '../../models/Paimef-Transparente/accion.js';

const url = '/paimef-transparente/acciones/'

router.post(`${url}agregar`, async( req,res ) => {
    const body = req.body
    try {
        const accion = await Accion.create( body )
        res.status(200).json( accion )
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
})

router.get(`${url}mostrar`, async( req, res ) => {
    try {
        const data = await Accion.find()
        res.json( data )
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error de conexión',
            error
        })
    }
})





export default router