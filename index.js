const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const PORTA = 3000

app.use(express.static("public"))

//Configurando o handlebars para ser o template
app.engine("handlebars",handlebars.engine({
    defaultLayout:"main",
    runtimeOptions:{
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault:true
    }
}))
app.set("view engine","handlebars")

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/avisos",(req,res)=>{
    res.render("avisos")
})

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta: ${PORTA}`)
})

