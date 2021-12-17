"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
const app = express();
app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use('/', router_1.default);
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
