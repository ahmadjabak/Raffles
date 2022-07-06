const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    const tokenheader = req.header('x-auth-token')

    if (!token) {
        return res.status(401).json({ msg: 'ma m3k token ya teze'})
    }
    try {
        const decoded = jwt.verify(token, ('token'));
        req.admin = decoded.admin;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'token 8lt barra!!!'})
    }
}