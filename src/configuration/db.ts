import { connect } from "mongoose";
import { error } from "console";
import config from "./config";
// Establecer la conexion a la base de datos

run().catch((error) => console.error(error.stack));

async function run() {
  // Conectarse a la base de datos
  await connect(`${config.mongodb}`);
  console.log("Conectado a la base de datos");

  //console.log(Solicitud.find());
}
