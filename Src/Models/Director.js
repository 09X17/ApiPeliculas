import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  estado: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

export default mongoose.model("Director", directorSchema);
