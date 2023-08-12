import { Router } from 'express';
const router = Router();

// Importamos JWT para generar código de seguridad
import pkg from 'jsonwebtoken';
const { sign } = pkg;

// importamos nuestro modelo User para poder registrar a nuestros usuarios
import Usuario from '../../../models/Sistema-Monitoreo/login/user.js';


// Hash contraseña 
import { compareSync } from 'bcrypt';
const saltRounds = 10;

// Creamos la ruta para poder agregar a nuestros usarios
router.post('/', async(req,res) => {
    const body = req.body;
    try {
        const usuarioDB = await Usuario.findOne({email: body.email})
        console.log( usuarioDB );

        // Evaluamos el correo
        if(!usuarioDB)
        {
            return res.status(400).json({
                mensaje: 'Email no encontrado'
            })
        }

        // Evaluar la contraseña 
        if(!compareSync(body.pass, usuarioDB.pass))
        {
            return res.status(400).json({
                mensaje:'Contraseña incorrecta'
            })
        }

        // Generación del token
        const token = sign({
            data: usuarioDB
        }, 'royals', {expiresIn: 60 * 60 * 24 * 30});

        res.json({
            usuarioDB,
            token
        })
    } catch (error) {
        return res.status(400).json({
            mensaje: 'No se logra accesar a tu petición',
            error
        }) 
    }



});


export default router; 