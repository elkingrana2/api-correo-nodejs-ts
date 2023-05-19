import Solicitud from "../model/solicitud.model";
class CorreoService {
  async sendEmail(placa: string, correo: string, idParqueadero: number, mensaje: string): Promise<string> {
    console.log("Alguien le pegó al endpoint de correo");
    const solicitud = new Solicitud({
      placa,
      correo,
      idParqueadero,
      mensaje,
    });
    await solicitud.save();
    const res: string = "Correo enviado exitosamente";
    return res;
  }

  // optener las solicitudes
  async getSolicitudes(): Promise<(typeof Solicitud)[]> {
    console.log("Le dieron al Get de solicitudes");
    const solicitudes = (await Solicitud.find()) as (typeof Solicitud)[];
    return solicitudes;
  }
}

export default CorreoService;
