import express from "express";
import mustacheExpress from "mustache-express";
import path from "path";
import { fileURLToPath } from "url";
import { sendTransaction } from "./iotaInterface.js";

// setup __dirname property with ES module imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// setup mustache templating
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/public");

const transactionMiddleware = (req, res, next) => {
    if (JSON.stringify(req.query) !== "{}") {
        // query parameters found in request - process transaction
        sendTransaction(req.query.msg)
            .then((bundle) => {
                res.render("index", { hash: bundle[0].hash });
            })
            .catch((error) => {
                console.log(error);
                res.send("server error");
            });
    } else {
        // no query parameters - serve other static content (fonts/images)
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
    console.log(`listening on port ${port}`);
});
