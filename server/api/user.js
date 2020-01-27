var express = require('express')
var router = express.Router();

//return all
// router.get('/', (req, res, next) => {

// })

//return by id
router.get('/:id', (req, res, next) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(user => {
        return res.status(200).send(user);
    })
})

//post
// router.post('/', (req, res, next) => {

// })

//put
// router.put('/:id', (req, res, next) => {

// })

//delete
// router.delete('/:id', (req, res, next) => {
    
// })

module.exports = router;