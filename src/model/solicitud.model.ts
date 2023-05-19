import mongoose, { Schema, Document } from "mongoose";

interface ISolicitud extends Document {
  placa: string;
  correo: string;
  idParqueadero: number;
  mensaje: string;
}

const SolicitudSchema: Schema = new Schema({
  placa: { type: String, required: true },
  correo: { type: String, required: true },
  idParqueadero: { type: Number, required: true },
  mensaje: { type: String, required: true },
});

const Solicitud = mongoose.model<ISolicitud>("solicitudes", SolicitudSchema);

export default Solicitud;
