import { Router } from 'express';
const router = Router()

import Usuario from '../../models/Paimef-Transparente/usuarios.js';
import User from '../../models/paimef/user.js';
import { verificarAuth, verificarAdmin } from '../../middlewares/autenticacion.js';

// Hash contraseña 
import { hashSync } from 'bcrypt';
const saltRounds = 10;

// Filtrar campos de PUT
import { pick } from 'underscore';

router.post('/paimef-transparente/registro/nuevo-usuario', async(req,res) => {
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
});
/**
 * Obtiene el listado completo de usuarios registrados en la plataforma
 */
router.get('/listado-usuarios', [verificarAuth,verificarAdmin], async(req, res) => {
    console.log(req.params);
    try {
        const usuarios = await User.find({
            activo: true
        }, ['role', 'nombre', 'email', 'activo']);
        res.status(200).json(usuarios);
    } catch(error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
});
/**
 * Obtener la información de un usuario en especifico
 */
router.get('/info-usuario/:id', [verificarAuth,verificarAdmin], async(req, res) => {
    // console.log(req.params);
    try {
        const _id = req.params.id;
        const usuario = await User.findById(_id, ['role', 'nombre', 'email', 'activo']);
        res.status(200).json(usuario);
    } catch(error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
});
/**
 * Actualización de datos del usuario
 */
router.put('/actualizar-usuario/:id', [verificarAuth,verificarAdmin], async(req, res) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        body.estado = body.nombre;
        // Si el campo marca que se debe actualizar la contraseña
        if(body.actualiza_contrasenia){
            body.pass = hashSync(body.password, saltRounds);
        }
        const usuarioData = pick(req.body,['role', 'nombre', 'pass', 'email', 'estado', 'pass']);
        // Se genera la actualización
        const usuarioDB = await User.findByIdAndUpdate(_id, usuarioData,{ new: false, runValidators: true});
        return res.json(usuarioDB);
    } catch(error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
});

router.delete('/eliminar-usuario/:id', [verificarAuth,verificarAdmin], async(req, res) => {
    try {
        const _id = req.params.id;
        const usuarioDB = await User.findByIdAndDelete(_id);
        return res.json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        });
    }
});

export default router