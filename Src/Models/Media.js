import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  sinopsis: { type: String },
  url: { type: String, required: true, unique: true },
  imagenPortada: { type: String },
  anioEstreno: { type: Number },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: "Genero", required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director", required: true },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: "Productora", required: true },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: "Tipo", required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

export default mongoose.model("Media", mediaSchema);
