const transporter = require("../transporter.js");
const { TEST_USER } = process.env;

const emailSender = async (destinatary, name) => {
    const mailOptions = {
        from: TEST_USER,
        to: destinatary,
        subject: "User Banned.",
        template: "userBan",
        context: {
            name
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