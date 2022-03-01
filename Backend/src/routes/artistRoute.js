const { Router } = require("express");
const router = Router();
const artistController = require('../controllers/artistController.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
    const artists = await artistController()
    res.send(artists);
});



module.exports = router;