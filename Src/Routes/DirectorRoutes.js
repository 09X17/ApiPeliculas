import { Router } from "express";
import {
  crearDirector,
  listarDirectores,
  actualizarDirector,
  eliminarDirector
} from "../Controllers/DirectorController.js";

const router = Router();

router.post("/", crearDirector);
router.get("/", listarDirectores);
router.put("/:id", actualizarDirector);
router.delete("/:id", eliminarDirector);

export default router;
