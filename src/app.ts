import express, { Request, Response } from "express";
import correoRoutes from "./routes/correo.routes";
import config from "./configuration/config";
import path from "path";
import cors from "cors";
import * as middleware from "./middlewares/error.handler";
const app = express();

app.use(cors());

// Express configuration
app.set("port", config.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

// Manejo de rutas

const router = express.Router();
app.use("/api", router);
router.use("/email", correoRoutes);

// Errores middleware (se usan despues de las rutas)
app.use(middleware.logErrors);
app.use(middleware.boomErrorHandler);
app.use(middleware.validationError);
app.use(middleware.errorHandler);
export default app;
