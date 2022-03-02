const { Router } = require("express");
const router = Router();
const artistControllerGetAll = require('../controllers/getAll.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/getall", async (req, res) => {
    const artists = await artistControllerGetAll();
    res.send(artists);
});

router.get("/get/:id", async (req, res) => {
    const artists = await artistController()
    res.send(artists);
});

router.get("/search", async (req, res) => {
    const artists = await artistController()
    res.send(artists);
});

router.post("/create", async (req, res) => {
    const artists = await artistController()
    res.send(artists);
});

router.patch("/modify", async (req, res) => {
    const artists = await artistController()
    res.send(artists);
});


module.exports = router;