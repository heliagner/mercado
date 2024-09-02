const express = require("express");
const router = express.Router();

const mercado_controller = require("../controllers/mercado.js");

router.post("/", (req, res) => {
    const code = mercado_controller.store(req.body)
    res.status(code).json()
});

router.get("/", (req, res) => {
    res.json(mercado_controller.index())
});

router.get("/:id", (req, res) => {
    res.json(mercado_controller.show(req.params.id))
});

router.put("/:id", (req, res) => {
    const code = mercado_controller.update(req.body, req.params.id)
    res.status(code).json()
});

router.delete("/:id", (req, res) => {
    const code = mercado_controller.destroy(req.params.id)
    res.status(code).json()
});

module.exports = router