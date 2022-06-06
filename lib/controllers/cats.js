const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
.get('/cats', (req, res) => {
    res.json(cats);

})
.get('/cats/id', (req, res) => {
    const id = req.params/id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat);
})

.get('/cats', (req, res) => {
    res.json(cats);

});