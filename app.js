import express from "express";
import { sendTransaction } from "./iotaSend.js";
import path from "path";
import { fileURLToPath } from "url";

// enable __dirname property with ES module imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.use("/", express.static("public"));

app.get("/", (req, res) => {
    const message = req.query.msg;
    console.log(message);
    sendTransaction(message)
        .then((bundle) => {
            // console.log("sending hash bundle...");
            // res.send(bundle[0].hash);
            // res.sendFile(
            //     __dirname + "/public/index.html",
            //     __dirname + "/public/images/iota-white.png"
            //     // __dirname + "/public/fonts/Metropolis-Bold.otf"
            // );
            // // res.sendFile(__dirname + "/public/images/iota-white.png");
            // // res.sendFile(__dirname + "/public/index.html");
            express.static;
        })
        .catch((err) => {
            console.log(err);
            res.send("something went wrong");
        });
});

// app.post("/", function (req, res) {
//     const responseObj = { test: 32 };
//     console.log("sending post response...");
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(responseObj));
// });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
