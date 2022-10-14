const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/RenderTemplate');
const OneBook = require('../views/OneBook');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const apires = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const descriptions = await apires.json();
  renderTemplate(OneBook, { descriptions }, res);
});

module.exports = router;
