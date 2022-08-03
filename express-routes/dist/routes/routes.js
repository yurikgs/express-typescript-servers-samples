"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("API Express com TS!");
});
router.get("/users", (req, res) => {
    res.send('rota de usuários');
});
router.post("/users", (req, res) => {
    res.send(req.body);
});
router.put("/users/:id", (req, res) => {
    res.send({
        params: req.params,
        body: req.body
    });
});
router.delete("/users/:id", (req, res) => {
    res.send({
        params: req.params
    });
});
