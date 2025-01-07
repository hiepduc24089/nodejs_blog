import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Đường dẫn đến thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs'); //Sử dụng handlebars làm view engine
app.set('views', path.join(__dirname, 'resources/views')); //Đường dẫn đến thư mục chứa view

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
