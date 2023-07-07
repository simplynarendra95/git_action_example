"use strict";

const User = require("../models/users.js");
const Contact = require("../models/contact.js");

const createContact = async (req, res) => {
    const id = "649d19697741810a2b1ccb6e";
    const { line, address, pincode } = req.body;
    try {
        const createcontact = await Contact({
            line: line,
            address: address,
            pincode: pincode,
            user: id
        });
        if (!createcontact) {
            return res.status(500).json({
                status: "Failed",
                message: "Address Data not created ..."
            });
        } else {
            await createcontact.save();
            return res.status(201).json({
                status: "Success",
                message: "Data Inserted Successfully"
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
    createContact
}