import { body } from 'express-validator';

export const crearDirectorValidator = [
  body('nombres')
    .notEmpty()
    .withMessage('Los nombres son obligatorios')
    .isLength({ min: 2 })
    .withMessage('Los nombres deben tener al menos 2 caracteres'),
  
  body('edad')
    .optional()
    .isInt({ min: 1, max: 120 })
    .withMessage('La edad debe ser un número entre 1 y 120'),
  
  body('nacionalidad')
    .optional()
    .isLength({ min: 2 })
    .withMessage('La nacionalidad debe tener al menos 2 caracteres')
];