// Importamos JWT para generar código de seguridad
import jwt from 'jsonwebtoken';


const verificarAuth = (req,res,next) => {
    const token = req.get('token');

    jwt.verify(token, 'royals', (err,decoded) => {

        if(err){
            return res.status(401).json({
                mensaje: 'Usuario incorrecto'
            })
        }

        req.usuario = decoded.data;


        next();
    })
};

const verificarAdmin = (req,res,next) => {
    const role = req.usuario.role

    if(role === 'ADMIN'){
        next();
    }
    else
    {
        return res.status(401).json({
            mensaje: 'No puedes realizar'
        })
    }
}

export { 
    verificarAuth,
    verificarAdmin
}