const express = require("express");
const router = express.Router();

const produto_controller = require("../controllers/fornecedor.js");

router.post("/", (req, res) => {
    const code = produto_controller.store(req.body)
    res.status(code).json()
});

router.get("/", (req, res) => {
    res.json(produto_controller.index())
});

router.get("/:id", (req, res) => {
    res.json(produto_controller.show(req.params.id))
});

router.put("/:id", (req, res) => {
    const code = produto_controller.update(req.body, req.params.id)
    res.status(code).json()
});

router.delete("/:id", (req, res) => {
    const code = produto_controller.destroy(req.params.id)
    res.status(code).json()
});

module.exports = router