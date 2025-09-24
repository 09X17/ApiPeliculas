import Tipo from "../Models/Tipo.js";

// 🔹 Crear tipo
export const crearTipo = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: "El nombre del tipo es obligatorio." });
    }

    const nuevoTipo = new Tipo({
      nombre,
      descripcion,
    });

    const guardado = await nuevoTipo.save();

    res.status(201).json({
      message: "✅ Tipo creado exitosamente",
      data: guardado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear tipo" });
  }
};

// 🔹 Listar tipos
export const listarTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json({
      total: tipos.length,
      data: tipos,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar tipos" });
  }
};

// 🔹 Actualizar tipo
export const actualizarTipo = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Tipo.findByIdAndUpdate(
      id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true, runValidators: true }
    );

    if (!actualizado) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }

    res.json({
      message: "✏️ Tipo actualizado correctamente",
      data: actualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar tipo" });
  }
};

// 🔹 Eliminar tipo
export const eliminarTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Tipo.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }

    res.json({ message: "🗑️ Tipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar tipo" });
  }
};
