const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Aviso = require("./models/aviso")
const PORTA = 3000

app.use(express.static("public"))

//Configurando o handlebars para ser o template
app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))
app.set("view engine", "handlebars")

//Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/avisos", (req, res) => {
    Aviso.findAll({order:[["id","DESC"]]}).then((aviso) => {
        res.render("avisos",{aviso:aviso})
    })
})

app.post("/add", (req, res) => {
    Aviso.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
    }).then(()=>{
        res.redirect("/")
    }).catch((erro)=>{
        res.send("Algo deu errado" + erro)
    })
})

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta: ${PORTA}`)
})

