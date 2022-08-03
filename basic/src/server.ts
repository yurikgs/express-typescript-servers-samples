import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("API")
})


app.get("/users", (req: Request, res: Response) => {

    res.send('rota de usuários')

})

app.listen(3000, () => console.log("Servidor Rodando!"))
