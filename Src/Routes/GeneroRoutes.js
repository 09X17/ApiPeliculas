import { Router } from "express";
import {
  crearGenero,
  listarGeneros,
  actualizarGenero,
  eliminarGenero,
  obtenerGeneroPorId,
  listarGenerosActivos
} from "../Controllers/GeneroController.js";

const router = Router();

// 📌 Rutas para Géneros
router.post("/", crearGenero);
router.get("/", listarGeneros);
router.get("/activos", listarGenerosActivos);
router.get("/:id", obtenerGeneroPorId);
router.put("/:id", actualizarGenero);
router.delete("/:id", eliminarGenero);

export default router;