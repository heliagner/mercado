const endereco = require("../middlewares/cep_endereco.js");

let nextId = 1

const model = (body, id = nextId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        body.endereco != undefined &&
        body.endereco != ""
    ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco
        };
    };
};

module.exports = model