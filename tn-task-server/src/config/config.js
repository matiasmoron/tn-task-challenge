/* eslint-disable no-undef*/
import dotenv from 'dotenv';
dotenv.config();

const environmentValues = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'develop',
  PORT: process.env.PORT || 4004,
};

export default environmentValues;
