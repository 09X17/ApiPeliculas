import { Router } from "express";
import {
  crearMedia,
  listarMedia,
  actualizarMedia,
  eliminarMedia,
  obtenerMediaPorId,
  buscarMediaPorTitulo
} from "../Controllers/MediaController.js";

const router = Router();

// 📌 Rutas para Media
router.post("/", crearMedia);
router.get("/", listarMedia);
router.get("/buscar", buscarMediaPorTitulo);
router.get("/:id", obtenerMediaPorId);
router.put("/:id", actualizarMedia);
router.delete("/:id", eliminarMedia);

export default router;