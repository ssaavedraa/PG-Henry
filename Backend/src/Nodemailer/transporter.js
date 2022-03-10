const { TEST_USER, TEST_PASS } = process.env;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: TEST_USER,
        pass: TEST_PASS
    }
});

module.exports = transporter;