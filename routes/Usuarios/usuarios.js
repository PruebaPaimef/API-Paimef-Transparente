import { Router } from 'express'
const router = Router()

import Usuario from '../../models/Usuarios/usuarios.js'

router.post('/registro/nuevo-usuario', async(req,res) => {
    const body = {
        nombre: req.body.nombre,
        email: req.body.email,
        tipo: req.body.tipo,
        estad: req.body.estado,
        pass: req.body.pass
    }


    try {
        const usuarioDB = await Usuario.create( body )
        res.status(200).json( usuarioDB )
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
        
    }
})

export default router;