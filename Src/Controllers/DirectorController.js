import Director from "../Models/Director.js";

// 🔹 Crear director
export const crearDirector = async (req, res) => {
  try {
    const { nombres, edad, nacionalidad } = req.body;

    if (!nombres) {
      return res.status(400).json({ error: "El nombre es obligatorio." });
    }

    const nuevoDirector = new Director({
      nombres,
      edad,
      nacionalidad,
    });

    const guardado = await nuevoDirector.save();
    res.status(201).json({
      message: "✅ Director creado exitosamente",
      data: guardado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear director" });
  }
};

// 🔹 Listar directores
export const listarDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json({
      total: directores.length,
      data: directores,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar directores" });
  }
};

// 🔹 Actualizar director
export const actualizarDirector = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Director.findByIdAndUpdate(
      id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true, runValidators: true }
    );

    if (!actualizado) {
      return res.status(404).json({ error: "Director no encontrado" });
    }

    res.json({
      message: "✏️ Director actualizado correctamente",
      data: actualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar director" });
  }
};

// 🔹 Obtener director por ID
export const obtenerDirectorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findById(id);
    
    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    
    res.json({ data: director });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener director" });
  }
};

// 🔹 Listar directores activos
export const listarDirectoresActivos = async (req, res) => {
  try {
    const directores = await Director.find({ estado: true });
    res.json({
      total: directores.length,
      data: directores,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al listar directores activos" });
  }
};

// 🔹 Eliminar director
export const eliminarDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Director.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: "Director no encontrado" });
    }

    res.json({ message: "🗑️ Director eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar director" });
  }
};
