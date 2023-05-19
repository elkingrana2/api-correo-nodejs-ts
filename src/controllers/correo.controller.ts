import { NextFunction, Request, Response } from "express";
import CorreoService from "../services/correo.service";

const service = new CorreoService();

export const sendEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { placa, correo, idParqueadero, mensaje } = req.body;
    const response = await service.sendEmail(placa, correo, idParqueadero, mensaje);
    return res.status(200).json({
      message: response,
    });
  } catch (error) {
    next(error);
  }
};

// optener las solicitudes
export const getSolicitudes = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const solicitudes = await service.getSolicitudes();
    return res.status(200).json({ solicitudes });
  } catch (error) {
    next(error);
  }
};
