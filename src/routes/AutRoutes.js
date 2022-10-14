const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const Avtorization = require('../views/Avtorization');

router.get('/', (req, res) => {
  renderTemplate(Avtorization, null, res);
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const passChek = await bcrypt.compare(password, user.password);
      if (passChek) {
        req.session.newUser = user.email;
        req.session.user_id = user.id;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.send('Не верный пароль');
      }
    } else {
      res.send('Не верный логин');
    }
  } catch (error) {
    console.log('ERROR ===123==>', error);
  }
});

module.exports = router;
