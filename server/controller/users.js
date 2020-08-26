let User = require('../model/user');
let midware = require('../util/middleware');

let router = require('express').Router();
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(result => {
            if (result !== null) {
                return res.json({
                    ardentID: result._id,
                    name: result.name,
                    affiliated: result.affiliated
                });
            }
            throw new Error('Not Found');
        })
        .catch(err => next(err));
});

router.post('/:id', (req, res, next) => {
    if ('id' in req.params === false || req.query.name === '' || 'name' in req.query === false) {
        throw new Error('Bad Request');
    }

    const NEW_USER = new User({
        _id: req.params.id,
        name: req.query.name,
        affiliated: []
    });
    
    NEW_USER.save()
            .then(contentSent => res.status(201).json({
                ardentID: contentSent._id,
                name: contentSent.name,
                affiliated: contentSent.affiliated
            }))
            .catch(err => next(err));
});

router.put('/:id', async (req, res, next) => {
    try {
        if ('contact' in req.query === false || req.query.contact === '') {
            throw new Error('Bad Request');
        }

        let srcUsrInfo = await User.findById(req.params.id), 
            tgtUsrInfo = await User.findById(req.query.contact);
        if (srcUsrInfo !== null && tgtUsrInfo !== null) {
            let result = midware.detectDuplicateContact(req.params.id, req.query.contact, srcUsrInfo, tgtUsrInfo);
            let sentInfo1 = srcUsrInfo, sentInfo2 = tgtUsrInfo;

            if (result === false) {
                let updatedSrcUsrInfo = [...srcUsrInfo.affiliated, { contactID: req.query.contact, contactName: tgtUsrInfo.name }],
                    updatedTgtUsrInfo = [...tgtUsrInfo.affiliated, { contactID: req.params.id, contactName: srcUsrInfo.name }];
                sentInfo1 = await User.findByIdAndUpdate(req.params.id, { affiliated: updatedSrcUsrInfo }, { new: true }),
                sentInfo2 = await User.findByIdAndUpdate(req.query.contact, { affiliated: updatedTgtUsrInfo }, { new: true });
            }
            
            res.json([
                {
                    ardentID: sentInfo1._id,
                    name: sentInfo1.name,
                    affiliated: sentInfo1.affiliated
                },
                {
                    ardentID: sentInfo2._id,
                    name: sentInfo2.name,
                    affiliated: sentInfo2.affiliated
                }
            ]);
        } else {
            throw new Error('Not Found');
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;