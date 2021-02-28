import express from "express";
import { sendTransaction } from "./iotaInterface.js";

const app = express();

const transactionMiddleware = (req, res, next) => {
    if (JSON.stringify(req.query) !== "{}") {
        // query parameters found in request - process transaction
        req.query.msg;
        sendTransaction(msg);
        // setTimeout(() => {
        //     console.log(req.query);
        //     next();
        // }, 1000);
    } else {
        // no query parameters - serve other static content
        console.log(req.path);
        next();
    }
};

app.use(transactionMiddleware);
app.use("/", express.static("public"));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
