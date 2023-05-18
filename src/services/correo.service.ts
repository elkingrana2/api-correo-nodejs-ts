class CorreoService {
  public async sendEmail(
    placa: string,
    correo: string,
    idParqueadero: number,
    mensaje: string
  ) {
    console.log('Alguien le pegó al endpoint de correo');
  }
}

export default CorreoService;
