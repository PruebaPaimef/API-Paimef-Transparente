import { Router } from 'express';
const router = Router();

// importamos nuestro modelo User para poder registrar a nuestros usuarios
import User from '../../models/paimef/user.js';

import { verificarAuth, verificarAdmin } from '../../middlewares/autenticacion.js';

// Hash contraseña 
import { hashSync } from 'bcrypt';
const saltRounds = 10;

// Filtrar campos de PUT
import { pick } from 'underscore';


// Creamos la ruta para poder agregar a nuestros usarios
// POST agregar usuarios

router.post('/registro-usuario', async(req,res) => {
    try {
        const body = {
            nombre: req.body.nombre,
            email: req.body.email,
            role: req.body.role,
            estado: req.body.estado    
        }
        body.pass = hashSync(req.body.pass, saltRounds);

        const usuarioDB = await User.create(body);
        res.status(200).json(usuarioDB);    
    } catch (error) {
        return res.status(500).json({
            mensaje: 'error',
            error
        })
    }
});


// PUT modificación de un usuario 
router.put('/usuario/:id', [verificarAuth,verificarAdmin], async(req,res) => {

    const _id = req.params.id;
    const body = pick(req.body,['nombre','pass']);

    if(body.pass){
        body.pass = hashSync(req.body.pass, saltRounds);
      }
    

    try {
        const usuarioDB = await User.findByIdAndUpdate(_id, body,{ new: true, runValidators: true});
        return res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'error',
            error
        })
    }
})

export default router;