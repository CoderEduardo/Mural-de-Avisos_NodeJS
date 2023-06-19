const bd = "mural_avisos"
const user = "root"
const password = "bancodedados1234"
const host = "localhost"
const dialect = "mysql"
const Sequelize = require("sequelize")
const sequelize = new Sequelize(bd, user, password, {
    host: host,
    dialect: dialect
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}