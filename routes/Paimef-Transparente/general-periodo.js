import { Router } from 'express'
const router = Router()

import GeneralPeriodo from '../../models/Paimef-Transparente/general-periodo.js'

const url = '/paimef-transparente/general-periodo/'

router.post(`${url}agregar`, async( req,res ) => {
    const body = req.body
    try {
        const data = await GeneralPeriodo.create( body )
        res.status(200).json( data )
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
})

router.get(`${url}mostrar`, async( req, res ) => {
    try {
        const data = await GeneralPeriodo.find()
        res.json( data )
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error de conexión',
            error
        })
    }
})

export default router
