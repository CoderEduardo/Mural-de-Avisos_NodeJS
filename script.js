const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const posts = require("./model/posts")
const path = require("path")
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => {
    console.log(`Servidor criado na porta: ${PORT}`)
})

app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()))

})

app.post("/new", bodyParser.json(), (req, res) => {
    
    let id = genereteId()
    let title =  req.body.title
    let description = req.body.description

    posts.newPosts(title,description)

    
    res.send("Post Adicionado")

})

