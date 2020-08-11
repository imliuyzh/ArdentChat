let User = require('../model/user');

let router = require('express').Router();
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(result => {
            if (result !== null) {
                return res.json({
                    ardentID: result._id,
                    affiliated: result.affiliated
                });
            }
            throw new Error('No Content');
        })
        .catch(err => next(err));
});

router.post('/:id', (req, res, next) => {
    const NEW_USER = new User({
        _id: req.params.id,
        affiliated: []
    });
    NEW_USER.save()
            .then(contentSent => res.json({
                ardentID: contentSent._id,
                affiliated: contentSent.affiliated
            }))
            .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
    if ('contact' in req.query === false) {
        throw new Error('Bad Request');
    }
    User.findById(req.params.id)
        .then(result => {
            if (result === null || req.query.contact === '') {
                throw new Error('Bad Request');
            }
            return Array.from(new Set([...result.affiliated, req.query.contact]));
        })
        .then(info => User.findByIdAndUpdate(req.params.id, { affiliated: info }, { new: true }))
        .then(contentSent => res.json({
                ardentID: contentSent._id,
                affiliated: contentSent.affiliated
        }))
        .catch(err => next(err));
        
});

module.exports = router;
