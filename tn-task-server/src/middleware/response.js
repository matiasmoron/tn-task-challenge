import { responseStatus, httpResponse } from '../utils/constants';

const customResponse =
  (res) =>
  (data = null, msg = 'It has been processed successfully.') => {
    const resp = {
      status: responseStatus.SUCCESS,
      message: msg,
      data: data,
    };

    return res.status(httpResponse.OK).json(resp);
  };

export const errorResponse =
  (res) =>
  (msg = '', status = httpResponse.BAD_REQUEST) => {
    const resp = {
      status: responseStatus.ERROR,
      message: msg,
      data: null,
    };
    return res.status(status).json(resp);
  };

const response = (req, res, next) => {
  res.response = customResponse(res);
  res.errorResponse = errorResponse(res);
  next();
};

export default response;
