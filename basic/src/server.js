import express from "express"

const app = express()


app.get("/users", (req, res) => {

    res.send('rota de usuários')

})

app.listen(3000, () => console.log("Servidor Rodando!"))