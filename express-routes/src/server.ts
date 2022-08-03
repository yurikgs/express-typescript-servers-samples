
import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import routesUsers from "./routes/users"

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use("/users", routesUsers)


app.get("/", (req: Request, res: Response) => {
    res.send("API Express com TS!")
})


app.listen(3000, () => console.log("Servidor Rodando!"))

