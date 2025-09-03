import Productora from "../Models/Productora.js";

export const crearProductora = async (req, res) => {
  try {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(201).json(productora);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listarProductoras = async (req, res) => {
  const productoras = await Productora.find();
  res.json(productoras);
};

export const actualizarProductora = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(productora);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarProductora = async (req, res) => {
  await Productora.findByIdAndDelete(req.params.id);
  res.json({ message: "Productora eliminada" });
};
