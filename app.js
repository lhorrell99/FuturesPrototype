import express from "express";
import { sendTestMsg } from "./iotaSend.js";

const app = express();

app.get("/", (req, res) => {
    const msg = req.query.msg;
    sendTestMsg(req.query.msg);
    res.send(`message ${msg} recorded on devnet`);
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
