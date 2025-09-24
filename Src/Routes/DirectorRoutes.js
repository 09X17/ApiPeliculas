import { Router } from "express";
import {
  crearDirector,
  listarDirectores,
  actualizarDirector,
  eliminarDirector,
  obtenerDirectorPorId,
  listarDirectoresActivos
} from "../Controllers/DirectorController.js";

const router = Router();

// 📌 Rutas para Directores
router.post("/", crearDirector);
router.get("/", listarDirectores);
router.get("/activos", listarDirectoresActivos);
router.get("/:id", obtenerDirectorPorId);
router.put("/:id", actualizarDirector);
router.delete("/:id", eliminarDirector);

export default router;