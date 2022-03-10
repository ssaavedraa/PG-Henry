const transporter = require("./transporter.js");
const { TEST_USER } = process.env;

const emailSender = async (destinatary, subject, text) => {
    const mailOptions = {
        from: TEST_USER,
        to: destinatary,
        subject: subject,
        text: text,
        /* html: <b>Hello World</b> */
    };

    console.log(mailOptions)

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