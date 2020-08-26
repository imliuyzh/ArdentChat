let User = require('../model/user');

function detectDuplicateContact(srcUsr, tgtUsr, srcUsrInfo, tgtUsrInfo) {
    for (let srcUsrContact of srcUsrInfo.affiliated) {
        if (srcUsrContact.contactID === tgtUsr) {
            return true;
        }
    }
    for (let tgtUsrContact of tgtUsrInfo.affiliated) {
        if (tgtUsrContact.contactID === srcUsr) {
            return true;
        }
    }
    return false;
}

async function getUpdatedUserInfo(from, to, socket) {
    let result1 = await User.findById(from), result2 = await User.findById(to);
    try {
        if (result1 !== null && result1 !== null) {
            socket.emit('newConversation', {
                ardentID: result1._id,
                name: result1.name,
                affiliated: result1.affiliated
            });
            socket.to(to).emit('newConversation', {
                ardentID: result2._id,
                name: result2.name,
                affiliated: result2.affiliated
            });
        } else {
            throw new Error('Not Found');
        }
    } catch (err) {
        err => next(err);
    }
}

function invalidEndpointHandler(req, res) {
    res.sendStatus(404);
}

function internalErrorHandler(err, req, res, next) {
    console.error(`[${new Date().toString()}] ERROR (${err.message})`);
    if (err.message === 'No Content') {
        return res.sendStatus(204);
    } else if (err.message === 'Not Found') {
        return res.sendStatus(404);
    } else if (err.message === 'Bad Request') {
        return res.sendStatus(400);
    } else if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).send('ID Already Taken');
    } else {
        next(err);
    }
}

module.exports = {
    detectDuplicateContact,
    getUpdatedUserInfo,
    invalidEndpointHandler,
    internalErrorHandler
};