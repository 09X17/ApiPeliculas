import Productora from "../Models/Productora.js";

// 🔹 Crear productora
export const crearProductora = async (req, res) => {
  try {
    const { nombre, pais, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: "El nombre de la productora es obligatorio." });
    }

    const nuevaProductora = new Productora({
      nombre,
      pais,
      descripcion,
    });

    const guardada = await nuevaProductora.save();

    res.status(201).json({
      message: "✅ Productora creada exitosamente",
      data: guardada,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear productora" });
  }
};

// 🔹 Listar productoras
export const listarProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json({
      total: productoras.length,
      data: productoras,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar productoras" });
  }
};

// 🔹 Actualizar productora
export const actualizarProductora = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizada = await Productora.findByIdAndUpdate(
      id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true, runValidators: true }
    );

    if (!actualizada) {
      return res.status(404).json({ error: "Productora no encontrada" });
    }

    res.json({
      message: "✏️ Productora actualizada correctamente",
      data: actualizada,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar productora" });
  }
};

// 🔹 Eliminar productora
export const eliminarProductora = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminada = await Productora.findByIdAndDelete(id);

    if (!eliminada) {
      return res.status(404).json({ error: "Productora no encontrada" });
    }

    res.json({ message: "🗑️ Productora eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar productora" });
  }
};
