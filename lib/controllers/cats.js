const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/', (req, res) => {
    res.json(cats);
  })
 

  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat); 
  });
  
