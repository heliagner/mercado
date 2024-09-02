const express = require("express");
const router = express.Router();

const fornecedor_controller = require("../controllers/fornecedor.js");

router.post("/", (req, res) => {
    const code = fornecedor_controller.store(req.body)
    res.status(code).json()
});

router.get("/", (req, res) => {
    res.json(fornecedor_controller.index())
});

router.get("/:id", (req, res) => {
    res.json(fornecedor_controller.show(req.params.id))
});

router.put("/:id", (req, res) => {
    const code = fornecedor_controller.update(req.body, req.params.id)
    res.status(code).json()
});

router.delete("/:id", (req, res) => {
    const code = fornecedor_controller.destroy(req.params.id)
    res.status(code).json()
});

module.exports = router