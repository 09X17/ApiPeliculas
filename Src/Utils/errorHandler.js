export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Error de validación de Mongoose
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(error => error.message);
      return res.status(400).json({ error: errors.join(', ') });
    }
  
    // Error de duplicado
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res.status(400).json({ error: `${field} ya existe` });
    }
  
    // Error de ObjectId inválido
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'ID inválido' });
    }
  
    res.status(500).json({ error: 'Error interno del servidor' });
  };