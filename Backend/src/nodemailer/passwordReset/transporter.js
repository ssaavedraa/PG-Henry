const { TEST_USER, TEST_PASS } = process.env;
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: TEST_USER,
        pass: TEST_PASS
    }
});

transporter.use("compile", hbs({
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve('./src/resources/mail'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./src/nodemailer/templates'),
    extName: ".handlebars",
}));

module.exports = transporter;