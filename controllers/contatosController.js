const Contato = require('../models/contato');

let agenda = [];

const controller = {
    
    // Arrow function
    salvar: (req, res) => {
        const dados = req.body;
        if (dados.nome && dados.telefone) {
            let contato = new Contato(dados);
            agenda.push(contato);
            return res.status(201).json(contato);
        }else{
            res.status(400).json({ mensagemErro: 'O nome ou telefone não foi preenchido!!'});
        }
    },
    recuperarTodas: (req, res) => res.json(agenda)
};
module.exports = controller;