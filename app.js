// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
    const msg = req.query.msg;
    res.send(msg);
});

let port = process.env.PORT; // required for heroku
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
