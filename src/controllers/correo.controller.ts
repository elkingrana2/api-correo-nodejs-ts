import { Request, Response } from 'express';
import CorreoService from '../services/correo.service';

const service = new CorreoService();

export const sendEmail = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { placa, correo, idParqueadero, mensaje } = req.body;
    service.sendEmail(placa, correo, idParqueadero, mensaje);
    return res.status(200).json({
      message: 'Correo enviado exitosamente',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error al enviar el correo',
    });
  }
};
