const {create,getUsers,getUsersById,updateUser,deleteUser, getUserByEmail, getUserAllInfoById} = require('./user.service')
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
    createUser: (req,res)=>{
        const body = req.body;
        body.password = CryptoJs.AES.encrypt(body.password, process.env.PASS_SEC).toString()
        create(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User created successfully",
                data: result
            })
        })
    },
    gerUserById: (req, res)=>{
        const id = req.params.id;
        getUsersById(id, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            if (result.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: "User not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User found",
                data: result
            })
        })
    },
    getUserAllInfoById: (req, res)=>{
        const id = req.params.id;
        getUserAllInfoById(id, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            if (result.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: "User Education Info not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User Education Info found",
                data: result
            })
        })
    },
    getUsers: (req, res)=>{
        getUsers((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Users found",
                data: result
            })
        })
    },
    updateUser: (req, res)=>{
        const body = req.body;
        updateUser(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result
            })
        })
    },
    deleteUser: (req, res)=>{
        const data = req.params.id;
        deleteUser(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User delete successfully"
            })
        })
    },
    login : (req, res)=>{
        const body = req.body;
        getUserByEmail(body.emailAddress, (err, result)=>{
            if (err) {
                console.log(err);
            }
            if (!result) {
                return res.status(204).json({
                    success: false,
                    message: "Invalid email or password"
                })
            }
            const hashedPassword = CryptoJs.AES.decrypt(result.password, process.env.PASS_SEC);
            const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
            originalPassword !== body.password && res.status(401).json("Wrong credintial");

            const accessToken = jwt.sign({
                id:result.id,
                role:result.role,
            },
            process.env.JWT_SEC,
            {expiresIn: "1d"}
            );

            const {password, ...others} = result;
            res.status(200).json({
                success: true,
                message: "Logged in successfully",
                data:{...others, accessToken}
            });
        })
    }
}