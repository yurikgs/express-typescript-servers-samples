import express, { Router, Request, Response } from "express"

const router = Router()
// outra forma: const router = express.Router()


router.get("/", (req: Request, res: Response) => {

    res.send('rota de usuários')

})


router.post("/", (req: Request, res: Response) => {

    res.send(req.body)


})

router.put("/:id", (req: Request, res: Response) => {

    res.send({
        params: req.params,
        body: req.body
    })

})

router.delete("/:id", (req: Request, res: Response) => {

    res.send({
        params: req.params
    })

} )

export default router