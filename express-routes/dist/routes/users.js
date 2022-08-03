"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('rota de usuários');
});
router.post("/", (req, res) => {
    res.send(req.body);
});
router.put("/:id", (req, res) => {
    res.send({
        params: req.params,
        body: req.body
    });
});
router.delete("/:id", (req, res) => {
    res.send({
        params: req.params
    });
});
exports.default = router;
