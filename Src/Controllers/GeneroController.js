import Genero from "../Models/Genero.js";

export const crearGenero = async (req, res) => {
  try {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(201).json(genero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listarGeneros = async (req, res) => {
  const generos = await Genero.find();
  res.json(generos);
};

export const actualizarGenero = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(genero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarGenero = async (req, res) => {
  await Genero.findByIdAndDelete(req.params.id);
  res.json({ message: "Género eliminado" });
};
