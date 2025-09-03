import Tipo from "../Models/Tipo.js";

export const crearTipo = async (req, res) => {
  try {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(201).json(tipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listarTipos = async (req, res) => {
  const tipos = await Tipo.find();
  res.json(tipos);
};

export const actualizarTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(tipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarTipo = async (req, res) => {
  await Tipo.findByIdAndDelete(req.params.id);
  res.json({ message: "Tipo eliminado" });
};
