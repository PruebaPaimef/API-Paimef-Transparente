import { Router } from 'express';
const router = Router();

// importación de nuestro modelo acción 
import Accion from '../../models/paimef/accion.js';
import Info from '../../models/paimef/informacion.js';

import { verificarAuth, verificarAdmin } from '../../middlewares/autenticacion.js';

// API para poder agregar acción por usuario registrado, solamente usuarios registrados pueden agregar acciones
// Registrar nueva acción
router.post('/agregar-accion', verificarAuth,async(req,res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;

    try {
        const accionDB = await Accion.create(body);
        res.status(200).json(accionDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'error',
            error
        })
    }
});

// Ruta para agregar información general por periodo y usuario
router.post('/agregar-informacion', verificarAuth,async(req,res) => {
    const body = req.body;
    body.usuarioId = req.usuario._id;

    try {
        const informacionDB = await Info.create(body);
        res.status(200).json(informacionDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'error',
            error
        })
    }
});


// GET para mandar llamar todas las acciones de nuestra base de datos
router.get('/mostrar-acciones', verificarAuth,async(req,res) => {
    const usuarioId = req.usuario._id;
    try {
        const accionDB = await Accion.find({usuarioId});
        res.json(accionDB);     
    } catch (error) {
        return res.status(401).json({
            mensaje: 'Error puta',
            error
        })
    }
});

// GET para las plataformas por estado
router.get('/mostrar-paimef', async(req,res) => {
    try {
        const paimefBD = await Accion.find();
        res.json(paimefBD);
    } catch (error) {
    return res.status(401).json({
        mensaje: 'Error inesperado',
        error
    })        
    }
});

router.get('/mostrar-general', async(req,res) => {
    try {
        const generalBD = await Info.find();
        console.log(generalBD);
        res.json(generalBD);
    } catch (error) {
        return res.status(401).json({
            mensaje: 'Error inesperado',
            error
        })
    }
});

//  Traer toda la información general 
router.get('/informacion-general', verificarAuth,async(req,res) => {
    const usuarioId = req.usuario._id;
    try{
        const infoDB = await Info.find({usuarioId});
        res.json(infoDB);    
    }catch(error) {
        return res.status(401).json({
            mensaje:'Error',
            error
        })
    }
});


// Eliminar acciones de nuestra base de datos
router.delete('/eliminar-accion/:id', verificarAuth, async(req, res) => {
    const _id = req.params.id;
    try {
      const accionDb = await Accion.findByIdAndDelete({_id});
      if(!accionDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(accionDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // eliminar informacion general de la base de datos 
  router.delete('/eliminar-informacion/:id', verificarAuth, async(req, res ) => {
      const _id = req.params.id;
      try {
          const eliminarDB = await Info.findByIdAndDelete({_id});
          if(!eliminarDB){
              return res.status(400).json({
                  mensaje: 'No se encontró el ID indicado',
                  error
              })
          }
          res.json(eliminarDB);
      } catch (error) {
          return res.status(400).json({
              mensaje: 'Ocurrió un error inesperado',
              error
          })
      }
  });


//   Actualizar acción 
router.put('/editar-meta/:id', verificarAuth, async(req,res) => {
    
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const metaDB = await Accion.findByIdAndUpdate(_id,body,{new:true});
        res.json(metaDB);


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error inesperado',
            error
        })
    }

});

router.get('/accion/:id', verificarAuth, async(req,res) => {
    const _id = req.params.id;
    try {

        const accionDB = await Accion.findOne({_id});
        res.json(accionDB);


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error inesperado',
            error
        })
    }
})

export default router;