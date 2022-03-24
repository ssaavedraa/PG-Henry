const { Painting, Purchase } = require("../../db");

const mercadopago = require("mercadopago");
const getExpirationDate = require("./utils/getExpirationDate");

const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const preference = async (req, res) => {
  const paintingsIds = req.body.paintingsIds;
  const userId = req.body.userId;
  const url = req.body.url;
  const hostname = req.headers.host;
  let paintings = [];

  try {
    for (p of paintingsIds) {
      const painting = await Painting.findByPk(p);
      paintings.push(painting);
    }

    const purchase = await Purchase.create({
      state: "processing",
      userId: userId,
    });

    paintings = paintings.map((p) => {
      p = p.toJSON();
      return {
        title: p.title,
        unit_price: p.price,
        quantity: 1,
      };
    });

    let expiration = getExpirationDate();
    expiration = expiration.toISOString();
    expiration = expiration.slice(0, -1);

    let expirationDateTo = `${expiration}-03:00`;

    let preference = {
      items: paintings,
      back_urls: {
        success: `http://${hostname}/checkout/paymentSuccess`,
        failure: `http://${hostname}/checkout/paymentFailure`,
        pending: `http://${hostname}/checkout/paymentPending`,
      },
      auto_return: "approved",
      external_reference: JSON.stringify({ purchaseId: purchase.id, url }),
      date_of_expiration: expirationDateTo,
      expiration_date_to: expirationDateTo,

      expires: true,
    };

    const response = await mercadopago.preferences.create(preference);

    res.json({
      status: "ok",
      preferenceId: response.body.id,
      purchaseId: purchase.id,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "error", message: e.message });
  }
};

module.exports = preference;
