const mercado = require("../controllers/mercado.js")
const fornecedor = require("../controllers/fornecedor.js")

let nextId = 1

const model = (body, id = nextId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.quantidade != undefined &&
        body.quantidade != "" &&
        body.mercado_id != undefined &&
        mercado.show(body.mercado_id) &&
        body.fornecedor_id != undefined &&
        fornecedor.show(body.fornecedor_id)
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado: body.mercado_id,
            fornecedor: body.fornecedor_id
        };
    };
};

module.exports = model