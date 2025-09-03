import { Router } from "express";
import {
  crearGenero,
  listarGeneros,
  actualizarGenero,
  eliminarGenero
} from "../Controllers/GeneroController.js";

const router = Router();

// Definimos las rutas y usamos las funciones del controller
router.post("/", crearGenero);
router.get("/", listarGeneros);
router.put("/:id", actualizarGenero);
router.delete("/:id", eliminarGenero);

export default router;
