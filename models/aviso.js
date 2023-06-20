const bd = require("./db")

const Avisos = bd.sequelize.define('avisos', {
    titulo: {
        type: bd.Sequelize.STRING
    },
    conteudo: {
        type: bd.Sequelize.TEXT
    }

})

/* Códgio usado apenas para criar a tabela, depois de criado uma vez, você pode apagar ele
Avisos.sync({force:true}) 
*/

module.exports = Avisos