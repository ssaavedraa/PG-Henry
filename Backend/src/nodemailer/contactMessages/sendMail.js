const transporter = require("../transporter.js");
const { TEST_USER } = process.env;

const emailSender = async (name, mail, message) => {
    const mailOptions = {
        from: TEST_USER,
        to: "santart2022@gmail.com",
        subject: "New Message.",
        template: "contactMessages",
        context: {
            name,
            mail,
            message
        }
    };

    await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return error
        } else {
            console.log(`Email sent: ${info.response}`)
            return info.response
        }
    });
};

module.exports = emailSender;