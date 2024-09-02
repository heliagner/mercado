const express = require('express');
const cep_endereco = require("./middlewares/cep_endereco.js");
const fornecedor_controller = require("./routes/fornecedor.js");
const mercado_controller = require("./routes/mercado.js");
const produto_controller = require("./routes/produto.js");
const app = express();
const port = 3200;

app.use(express.json());

app.post("/mercado", (req, res, next) => {
    next()
}, cep_endereco, (req, res) => {
    res.json(req.body)
});

app.use("/mercado", mercado_controller);

app.use("/fornecedor", fornecedor_controller);

app.use("/produto", produto_controller);

app.listen(port, () => {
    console.log("Server is running in " + port + " port")
});