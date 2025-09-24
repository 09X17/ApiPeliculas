import { Router } from "express";
import {
  crearProductora,
  listarProductoras,
  actualizarProductora,
  eliminarProductora,
} from "../Controllers/ProductoraController.js";

const router = Router();

// 📌 Rutas para Productoras
router.post("/", crearProductora);          
router.get("/", listarProductoras);        
router.put("/:id", actualizarProductora);     
router.delete("/:id", eliminarProductora);     

export default router;
