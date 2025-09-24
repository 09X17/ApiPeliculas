import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Rutas
import generoRoutes from "./Routes/GeneroRoutes.js";
import directorRoutes from "./Routes/DirectorRoutes.js";
import productoraRoutes from "./Routes/ProductoraRoutes.js";
import tipoRoutes from "./Routes/TipoRoutes.js";
import mediaRoutes from "./Routes/MediaRoutes.js";



const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect("mongodb+srv://nico:nico1709@cluster0.zoqicb3.mongodb.net/ApiRest")
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Error MongoDB:", err));

// =====================
// 📌 Definición de rutas
// =====================
app.get("/api", (req, res) => {
  res.json({
    message: "📡 API funcionando correctamente",
    endpoints: {
      generos: {
        base: "/api/generos",
        activos: "/api/generos/activos",
        porId: "/api/generos/:id"
      },
      directores: {
        base: "/api/directores",
        activos: "/api/directores/activos",
        porId: "/api/directores/:id"
      },
      productoras: "/api/productoras",
      tipos: "/api/tipos",
      media: {
        base: "/api/media",
        buscar: "/api/media/buscar?titulo=xxx",
        porId: "/api/media/:id"
      },
    },
  });
});

app.use("/api/generos", generoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/productoras", productoraRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/media", mediaRoutes);

// =====================
// 📌 Endpoint
// =====================
app.get("/api/status", async (req, res) => {
  try {
    const [generosCount, directoresCount, productorasCount, tiposCount, mediaCount] = await Promise.all([
      Genero.countDocuments(),
      Director.countDocuments(),
      Productora.countDocuments(),
      Tipo.countDocuments(),
      mongoose.model("Media").countDocuments()
    ]);

    res.json({
      status: "✅ Sistema operativo",
      database: "MongoDB conectado",
      registros: {
        generos: generosCount,
        directores: directoresCount,
        productoras: productorasCount,
        tipos: tiposCount,
        media: mediaCount
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el estado del sistema" });
  }
});

// =====================
// 📌 Manejo
// =====================
app.use((req, res) => {
  res.status(404).json({
    error: "❌ Ruta no encontrada",
    path: req.originalUrl,
    sugerencia: "Visita GET /api para ver los endpoints disponibles"
  });
});

// =====================
// 📌 Middleware
// =====================
app.use((err, req, res, next) => {
  console.error("🔥 Error detectado:", err);

  // Error de validación de Mongoose
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(error => error.message);
    return res.status(400).json({ 
      error: "Error de validación",
      details: errors 
    });
  }

  // Error de duplicado
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({ 
      error: "Registro duplicado",
      details: `El valor para ${field} ya existe` 
    });
  }

  // Error de ObjectId inválido
  if (err.name === 'CastError') {
    return res.status(400).json({ 
      error: "ID inválido",
      details: "El ID proporcionado no es válido" 
    });
  }

  // Error general del servidor
  res.status(500).json({
    error: "❌ Error interno del servidor",
    details: process.env.NODE_ENV === 'development' ? err.message : 'Contacta al administrador'
  });
});

// =====================
// 🚀 Servidor
// =====================
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Panel de estado: http://localhost:${PORT}/api/status`);
  console.log(`📚 Documentación: http://localhost:${PORT}/api`);
});
