import express from "express";
import mongoose from "mongoose";
import generoRoutes from "./Routes/GeneroRoutes.js";
import directorRoutes from "./Routes/DirectorRoutes.js";
import productoraRoutes from "./Routes/ProductoraRoutes.js";
import tipoRoutes from "./Routes/TipoRoutes.js";
import mediaRoutes from "./Routes/MediaRoutes.js";

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect("mongodb+srv://nico:nico1709@cluster0.zoqicb3.mongodb.net/ApiRest")
    .then(() => console.log("✅ MongoDB conectado"))
    .catch(err => console.error("❌ Error MongoDB:", err));

// Rutas
app.use("/api/generos", generoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/productoras", productoraRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/media", mediaRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
