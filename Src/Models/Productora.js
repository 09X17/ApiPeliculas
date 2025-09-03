import mongoose from "mongoose";

const productoraSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  estado: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  slogan: { type: String },
  descripcion: { type: String }
});

export default mongoose.model("Productora", productoraSchema);
