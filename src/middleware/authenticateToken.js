const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Token received:', token);

    if (!token) {
        return res.status(401).json({ status: 401, message: 'Access Denied: No token provided' });
    }

    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.error('Error verifying token:', err);
        res.status(401).json({ status: 401, message: 'Invalid token' });
    }
};

module.exports = authenticateToken;