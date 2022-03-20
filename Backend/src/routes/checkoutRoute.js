const { Router } = require("express");
const router = Router();
const checkoutControllers = require("../controllers/checkout/index.js");

/* 
VENDEDOR
{
    "id": 1090513240,
    "nickname": "TESTQS0YUVEI",
    "password": "qatest7557",
    "site_status": "active",
    "email": "test_user_87104316@testuser.com"
}
COMPRADOR
{
    "id": 1090522718,
    "nickname": "TESTPWJPK4Z0",
    "password": "qatest6474",
    "site_status": "active",
    "email": "test_user_92165718@testuser.com"
}
 */

//ruta de compra
//pasan datos de contacto (guardar id de mercadopago)

//si etsan disponibles
//genero una compra con estado iniciado
//pasan a no disponibles
//despues las pasas a  disponibles con un settimeout
//genero compra con esatdo en pago

//opcion modularizar checkavailable y chequear dos veces

router.post("/checkAvailable", checkoutControllers.checkAvailable);

router.post("/contactInfo", checkoutControllers.contactInfo);
router.post("/createPreference", checkoutControllers.createPreference);

router.get("/paymentSuccess", checkoutControllers.paymentSuccess);
router.get("/paymentFailure", checkoutControllers.paymentFailure);
router.get("/paymentPending", checkoutControllers.paymentPending);

module.exports = router;
