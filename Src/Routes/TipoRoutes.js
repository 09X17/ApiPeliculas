import { Router } from "express";
import {
  crearTipo,
  listarTipos,
  actualizarTipo,
  eliminarTipo
} from "../Controllers/TipoController.js";

const router = Router();

router.post("/", crearTipo);
router.get("/", listarTipos);
router.put("/:id", actualizarTipo);
router.delete("/:id", eliminarTipo);

export default router;
