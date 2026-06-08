let User = require("../models/userModel")

const bcrypt = require('bcrypt');

async function signupUser(req, res) {


    let { username, email, password } = req.body



    try {

        let userExist = await User.findOne({ email })
        console.log(userExist);




        if (!userExist) {

            bcrypt.hash(password, 10, async function (err, hashedPassword) {
                let result = await User.create({
                    username,
                    email,
                    password: hashedPassword
                })

                res.status(200).json({
                    success: true,
                    message: 'user signup successfully'
                })

            });



        } else {
            res.status(409).json({
                success: false,
                message: 'user already exist'
            })
        }



    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }





}

async function loginUser(req, res) {

    let { email, password } = req.body


    try {

        let userExist = await User.findOne({ email })


        if (userExist) {

            bcrypt.compare(password, userExist.password, function (err, result) {

                let { password, email, username, _id } = userExist

                if (result) {


                    res.status(200).json({
                        success: true,
                        message: 'user login successful',
                        data: {
                            email, username, _id
                        }
                    })

                } else {
                    res.status(401).json({
                        success: false,
                        message: 'user login failed'
                    })
                }

            });



        } else {
            res.status(401).json({
                success: false,
                message: 'user login failed'
            })
        }



    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }


}






module.exports = { signupUser, loginUser }