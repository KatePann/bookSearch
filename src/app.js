require('dotenv').config(); // реквайрим .env

// Внешние импорты
const path = require('path'); // подключаем css
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');//  require session
const FileStore = require('session-file-store')(session);//  require session-store и указать для его именно

const app = express();

// Внутренние импорты
const { sequelize } = require('../db/models');

const HomeRoutes = require('./routes/HomeRoutes'); // импорт рутов
const RegRoutes = require('./routes/RegRoutes');// импорт рутов
const AutRoutes = require('./routes/AutRoutes');// импорт рутов
const OneBook = require('./routes/OneBookRoutes');// импорт рутов

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));// для чтения тел
app.use(express.json());// для чтения тел
app.use(express.static('public')); // подключаем css. проверять путь, возможно и такое написание
const PORT = process.env.PORT || 3001;
// const SESSION_SECRET = process.env;

//* Создание конфига для куки
const sessionConfig = {
  name: 'bookCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: 'book', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
// * подключение мидлвара для куки
app.use(session(sessionConfig));

app.use('/', HomeRoutes); // * подключение мидлвара для рута
app.use('/registration', RegRoutes); // * подключение мидлвара для рута
app.use('/autorization', AutRoutes); // * подключение мидлвара для рута
app.use('/onebook', OneBook); // * подключение мидлвара для рута

// * ручка для выхода пользователя с уничтожением куки и файла сессии
app.get('/logout', (req, res) => {
  if (req.session.newUser) {
    //  убийство куки если она есть и сессии тоже
    req.session.destroy(() => {
      res.clearCookie('bookCookie');
      res.redirect('/');
    });
  } else {
    // ! Защита ручки от вхождения в нее
    res.redirect('/autorization');
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
