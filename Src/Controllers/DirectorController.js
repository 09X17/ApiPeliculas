import Director from "../Models/Director.js";

export const crearDirector = async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).json(director);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listarDirectores = async (req, res) => {
  const directores = await Director.find();
  res.json(directores);
};

export const actualizarDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(director);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarDirector = async (req, res) => {
  await Director.findByIdAndDelete(req.params.id);
  res.json({ message: "Director eliminado" });
};
