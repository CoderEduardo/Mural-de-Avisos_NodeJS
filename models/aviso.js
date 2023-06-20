const bd = require("./db")

const Avisos = bd.sequelize.define('avisos', {
    titulo: {
        type: bd.Sequelize.STRING
    },
    conteudo: {
        type: bd.Sequelize.TEXT
    }

})

module.exports = Avisos