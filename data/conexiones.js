import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/`;
const options = {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect( `${url}paimef?retryWrites=true&w=majority`, options ).then(
    () => { console.log('Conectado a nuestra base de datos, ¡bienvenido!')},
    err => { console.log(err) }
)

mongoose.paimefTransparente = mongoose.createConnection( `${url}Paimef-Transparente?retryWrites=true&w=majority`, options )
mongoose.usuarios = mongoose.createConnection( `${url}Usuarios?retryWrites=true&w=majority`, options )
mongoose.sistemaMonitoreo = mongoose.createConnection( `${url}sistemaMonitoreo?retryWrites=true&w=majority`, options )

export default mongoose
