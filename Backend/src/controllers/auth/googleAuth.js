const { OAuth2Client } = require("google-auth-library");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const { User } = require("../../db");
const createJWT = require("./utils/createJWT.js");

const prueba = async (req, res) => {
    const { tokenId } = req.body;

    try {
        const loginTicket = await client.verifyIdToken({ idToken: tokenId,  audience: GOOGLE_CLIENT_ID });
        const  { email_verified, given_name, family_name, picture, email } = loginTicket.payload;
    
        if (email_verified) {
            let user = await User.findOne({
                where: { email, googleUser: true },
                raw: true
            });
    
            if (!user) {
                user = await User.create({
                    firstName: given_name,
                    lastName: family_name,
                    email,
                    profilePicture: picture,
                    role: "user",
                    googleUser: true
                });
                user = user.toJSON()
            };
    
            const token = createJWT(user.id);
    
    
            const sendUserInfo = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            };
          
            return res.json({
                status: "ok",
                user: sendUserInfo,
                token,
            });
        };

    } catch (err) {
        return res.json({ status: "error", message: err.message});
    }
};

module.exports = prueba;