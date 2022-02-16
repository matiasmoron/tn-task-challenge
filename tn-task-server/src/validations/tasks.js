import { check } from 'express-validator';
import fieldsValidation from '../middleware/fields-validation';

const validateQuantity = () =>
  check('quantity', 'Quantity is required')
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage('Quantity need to be a number greater than 0');

export const validateGetTasks = () => [validateQuantity(), fieldsValidation];
