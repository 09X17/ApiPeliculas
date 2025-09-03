import Media from "../Models/Media.js";

export const crearMedia = async (req, res) => {
  try {
    const media = new Media(req.body);
    await media.save();
    res.status(201).json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listarMedia = async (req, res) => {
  const medias = await Media.find()
    .populate("genero")
    .populate("director")
    .populate("productora")
    .populate("tipo");
  res.json(medias);
};

export const actualizarMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarMedia = async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ message: "Media eliminada" });
};
