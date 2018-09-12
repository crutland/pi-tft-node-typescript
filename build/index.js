"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});
console.log("init");
app.listen(80, () => {
    console.log("server lisening on 80");
});
//# sourceMappingURL=index.js.map