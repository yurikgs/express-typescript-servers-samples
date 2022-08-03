import express, { json, Request, Response, urlencoded } from "express"
import bodyParser from "body-parser"


const app = express()

// implementação body parser 
// método limitado:
//app.use(express.json())
//app.use(express.urlencoded( {extended:true} ))

app.use(bodyParser.urlencoded({ extended: false }))



app.get("/", (req: Request, res: Response) => {
    res.send("API Express com TS!")
})


app.get("/users", (req: Request, res: Response) => {

    res.send('rota de usuários')

})


app.post("/users", (req: Request, res: Response) => {

    res.send(req.body)


})

app.put("/users/:id", (req: Request, res: Response) => {

    res.send({
        params: req.params,
        body: req.body
    })

})

app.delete("/users/:id", (req: Request, res: Response) => {

    res.send({
        params: req.params
    })

} )


app.listen(3000, () => console.log("Servidor Rodando!"))
