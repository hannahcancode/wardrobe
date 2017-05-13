
import 'mongodb';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as routes from './routes/index';

// const db = mongoose.connection;

const app = express();

mongoose.connect('mongodb://localhost/userauthapp');


app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 3000));

// Listen on specified port number
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});
