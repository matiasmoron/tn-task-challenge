import { httpResponse } from '../utils/constants';
import { errorResponse } from './response';

const errorHandler = (err, req, res, next) => {
  console.log(err);
  return errorResponse(res)(
    'Internal error, try it again later',
    httpResponse.INTERNAL_SERVER_ERROR,
  );
};

export default errorHandler;
