import Media from "../Models/Media.js";
import Genero from "../Models/Genero.js";
import Director from "../Models/Director.js";
import Productora from "../Models/Productora.js";
import Tipo from "../Models/Tipo.js";

// 🔹 Obtener media por ID
export const obtenerMediaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id)
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    if (!media) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    res.json({ data: media });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener media" });
  }
};

// 🔹 Buscar media por título
export const buscarMediaPorTitulo = async (req, res) => {
  try {
    const { titulo } = req.query;
    
    if (!titulo) {
      return res.status(400).json({ error: "Parámetro 'titulo' requerido" });
    }

    const medias = await Media.find({
      titulo: { $regex: titulo, $options: 'i' }
    })
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    res.json({
      total: medias.length,
      data: medias,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al buscar media" });
  }
};

// 🔹 Validar relaciones antes de crear media
const validarRelaciones = async (generoId, directorId, productoraId, tipoId) => {
  const [genero, director, productora, tipo] = await Promise.all([
    Genero.findOne({ _id: generoId, estado: true }),
    Director.findOne({ _id: directorId, estado: true }),
    Productora.findOne({ _id: productoraId, estado: true }),
    Tipo.findById(tipoId)
  ]);

  const errores = [];
  if (!genero) errores.push("Género no encontrado o inactivo");
  if (!director) errores.push("Director no encontrado o inactivo");
  if (!productora) errores.push("Productora no encontrada o inactiva");
  if (!tipo) errores.push("Tipo no encontrado");

  return errores;
};

// 🔹 Crear Media
export const crearMedia = async (req, res) => {
  try {
    const { serial, titulo, url, genero, director, productora, tipo } = req.body;

    // Validaciones básicas
    if (!serial || !titulo || !url || !genero || !director || !productora || !tipo) {
      return res.status(400).json({ 
        error: "Serial, título, URL, género, director, productora y tipo son obligatorios." 
      });
    }

    // Validar relaciones activas
    const erroresRelaciones = await validarRelaciones(genero, director, productora, tipo);
    if (erroresRelaciones.length > 0) {
      return res.status(400).json({ error: erroresRelaciones.join(', ') });
    }

    // Verificar serial único
    const existeSerial = await Media.findOne({ serial });
    if (existeSerial) {
      return res.status(400).json({ error: "El serial ya existe" });
    }

    // Verificar URL única
    const existeUrl = await Media.findOne({ url });
    if (existeUrl) {
      return res.status(400).json({ error: "La URL ya existe" });
    }

    const nuevaMedia = new Media(req.body);
    const guardado = await nuevaMedia.save();

    const poblado = await Media.findById(guardado._id)
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    res.status(201).json({
      message: "✅ Media creada exitosamente",
      data: poblado,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al crear media" });
  }
};

// 🔹 Listar media
export const listarMedia = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    res.json({
      total: medias.length,
      data: medias,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar media" });
  }
};

// 🔹 Actualizar media
export const actualizarMedia = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Media.findByIdAndUpdate(
      id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true, runValidators: true }
    )
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");

    if (!actualizado) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    res.json({
      message: "✏️ Media actualizada correctamente",
      data: actualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar media" });
  }
};

// 🔹 Eliminar media
export const eliminarMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Media.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    res.json({ message: "🗑️ Media eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar media" });
  }
};

