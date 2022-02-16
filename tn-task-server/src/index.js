import environmentValues from './config/config';
import app from './services/app';

app.listen(environmentValues.PORT, () => {
  console.log('Connection has been established successfully.');
});
