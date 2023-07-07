"use strict";

const User = require("../models/users.js");

const securepwd = require("../helpers/securePassword.js");


/**
 * here we show the user register page into web-browser
 */
const userRegister = async (req, res) => {
    return res.render('register');
}


/**
 * here we register user.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const checkUser = await User.findOne({
            email: email
        });
        const hashedPassword = await securepwd.securePassword(password);
        if (!checkUser) {
            const user = await User.create({
                username: username,
                email: email,
                password: hashedPassword
            });
            const savedUser = await user.save();
            return res.render("register"), {
                message: "Your regestration has been successfully."
            }
            // return res.status(201).json({
            //     status: "Success",
            //     message: "User created successfully",
            //     data: user
            // });
        } else {
            return res.status(200).json({
                status: "Success",
                message: "User Found"
            });
        }
    } catch (error) {
        return res.render(
            'register',
            {
                message: error.message
                // message: "Your regestration has been failed.."
            });
        return res.status(501).json({
            status: "Failed",
            message: error.message
        });
    }
}

/**
 * here we access the all users data.
 */
const getUser = async (req, res) => {
    try {
        // const getusers = await User.find().select("-password -__v");
        const getusers = await User.find();
        if (!getusers) {
            return res.status(402).json({
                status: "Failed",
                message: "Users not found"
            });
        } else {
            console.log({ user: getusers })
            return res.render("showUsers", { getusers: getusers });
            return res.status(200).json({
                status: "Success",
                message: "Users found",
                data: getusers
            });
        }
    } catch (error) {
        return res.status(501).message({
            status: "Failed",
            message: error.message
        });
    }
}

/***
 * here we get the user data by id.
 */
const getUserByID = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById({ _id: id }).select("-password -__v");
        if (!user) {
            return res.status(402).json({
                status: "Failed",
                message: "User not found",
                data: user
            });
        } else {
            return res.status(200).json({
                status: "Success",
                message: "User found",
                data: user
            });
        }
    } catch (error) {
        return res.status(501).json({
            status: "Failed",
            message: error.message
        });
    }
}

/***
 * here we update the user data byId
 */
const updateUserId = async (req, res) => {
    const id = req.params.id;
    const { username, email } = req.body;
    try {
        const checkUser = await User.findById({ _id: id });
        if (!checkUser) {
            return res.status(402).json({
                status: "Failed",
                message: "User does not exist"
            });
        } else {
            if (username || email) {
                const updateuser = await User.updateOne({ _id: id }, {
                    $set: {
                        username: username,
                        email: email
                    }
                });
                return res.status(201).json({
                    status: "Success",
                    message: "User updated successfully",
                    data: updateuser
                })
            } else {
                return res.status(205).json({
                    status: "Failed",
                    message: "Atlast one field is required."
                });
            }
        }
    } catch (error) {
        return res.status(501).json({
            status: "Failed",
            message: error
        });
    }
}

/**
 * Delete user data by userID.
 */
const deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const checkUser = await User.findById({ _id: id });
        if (checkUser.isActive !== true) {
            return res.status(402).json({
                status: "Failed",
                message: "User not exist"
            });
        } else {
            const deleteUser = await User.updateOne({ _id: id }, {
                $set: {
                    isActive: false
                }
            });
            return res.status(201).json({
                status: "Success",
                message: "User deleted successfully.",
                data: deleteUser
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: error.message
        });
    }
}


module.exports = {
    userRegister,
    createUser,
    getUser,
    getUserByID,
    updateUserId,
    deleteUserById
}