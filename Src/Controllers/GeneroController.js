import Genero from "../Models/Genero.js";

// 🔹 Crear género
export const crearGenero = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: "El nombre del género es obligatorio." });
    }

    const nuevoGenero = new Genero({
      nombre,
      descripcion,
    });

    const guardado = await nuevoGenero.save();
    res.status(201).json({
      message: "✅ Género creado exitosamente",
      data: guardado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear género" });
  }
};

// 🔹 Listar géneros
export const listarGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json({
      total: generos.length,
      data: generos,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar géneros" });
  }
};

// 🔹 Actualizar género
export const actualizarGenero = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Genero.findByIdAndUpdate(
      id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true, runValidators: true }
    );

    if (!actualizado) {
      return res.status(404).json({ error: "Género no encontrado" });
    }

    res.json({
      message: "✏️ Género actualizado correctamente",
      data: actualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar género" });
  }
};

// 🔹 Obtener género por ID
export const obtenerGeneroPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findById(id);
    
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    
    res.json({ data: genero });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener género" });
  }
};

// 🔹 Listar géneros activos
export const listarGenerosActivos = async (req, res) => {
  try {
    const generos = await Genero.find({ estado: true });
    res.json({
      total: generos.length,
      data: generos,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar géneros activos" });
  }
};

// 🔹 Eliminar género
export const eliminarGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Genero.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: "Género no encontrado" });
    }

    res.json({ message: "🗑️ Género eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar género" });
  }
};
