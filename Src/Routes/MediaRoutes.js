import { Router } from "express";
import {
  crearMedia,
  listarMedia,
  actualizarMedia,
  eliminarMedia
} from "../Controllers/MediaController.js";

const router = Router();

router.post("/", crearMedia);
router.get("/", listarMedia);
router.put("/:id", actualizarMedia);
router.delete("/:id", eliminarMedia);

export default router;
