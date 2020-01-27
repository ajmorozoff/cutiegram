const express = require('express')
const router = express.Router();
const { Gram } = require('../../db');

//return all
router.get('/', (req, res, next) => {
    Gram.findAll()
        .then(results => {
            return res.status(200).send(results);
        })
        .catch(e => {
            res.status(500).send('Internal error');
            next(e);
        })
})

//return by id
router.get('/:id', (req, res, next) => {
    Gram.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then(results => {
        return res.status(200).send(results);
    })
    .catch(e => {
        res.status(500).send('Internal error');
        next(e);
    })
})

//post
// router.post('/', (req, res, next) => {
    
// })

//put
router.put('/:id', (req, res, next) => {
    Gram.update(
        {
            likes: req.body.likes,
        },
        {
        where: {
            id: req.params.id,
        }
    })
    .then(results => {
        return res.status(200).send(results);
    })
    .catch(e => {
        res.status(500).send('Internal error');
        next(e);
    })
});

//delete
// router.delete('/:id', (req, res, next) => {
    
// })

module.exports = router;