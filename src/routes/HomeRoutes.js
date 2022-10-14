const express = require('express');

const router = express.Router();


const renderTemplate = require('../lib/RenderTemplate');
const Home = require('../views/Home');

router.get('/', async (req, res) => {
  renderTemplate(Home, null, res);
});

module.exports = router;
