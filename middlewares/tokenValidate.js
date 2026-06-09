let jwt = require('jsonwebtoken')


let tokenValidate = (req, res, next) => {


    let token = req.headers.authorization?.split(' ')[1];


    if (token) {
        jwt.verify(token, '123', async (err, decoded) => {

            if (decoded) {

                next()


            } else {
                res.status(401).json({
                    success: false,
                    message: 'invalid token',

                })
            }


        });
    } else {

        res.status(401).json({
            success: false,
            message: 'invalid token',
        })

    }


}

module.exports = tokenValidate