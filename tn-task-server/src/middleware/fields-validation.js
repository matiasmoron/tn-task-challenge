import { validationResult } from 'express-validator';
import { errorResponse } from './response';
import { httpResponse } from '../utils/constants';

const getErrorMessage = (errors) => {
  return errors.reduce((msg, error) => {
    return `${msg} ${error.msg}.`;
  }, '');
};

const fieldsValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res)(
      getErrorMessage(errors.errors),
      httpResponse.BAD_REQUEST,
    );
  }
  next();
};

export default fieldsValidation;
