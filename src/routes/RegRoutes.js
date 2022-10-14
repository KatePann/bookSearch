const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  renderTemplate(Registration, null, res);
});

router.post('/', async (req, res) => {
  try {
    const {
      name, email, password,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const newUs = await User.create({
      name, email, password: hash,
    });

    req.session.newUser = newUs.name;
    req.session.user_id = newUs.dataValues.id;

    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    console.log('ERROR ===456==>', error);
  }
});

module.exports = router;
