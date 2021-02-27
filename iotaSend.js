import Iota from "@iota/core";
import Converter from "@iota/converter";

// const Iota = require("@iota/core");
// const Converter = require("@iota/converter");

const iota = Iota.composeAPI({
    provider: "https://nodes.devnet.iota.org:443",
});

const sendTestMsg = (msg, callback) => {
    const depth = 3;
    const minimumWeightMagnitude = 9;

    const address =
        "HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDH";

    const seed =
        "PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX";

    const message = JSON.stringify({ message: msg });
    const messageInTrytes = Converter.asciiToTrytes(message);

    const transfers = [
        {
            value: 0,
            address: address,
            message: messageInTrytes,
        },
    ];

    iota.prepareTransfers(seed, transfers)
        .then((trytes) => {
            return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
        })
        .then((bundle) => {
            // console.log(bundle[0].hash);
            callback(bundle[0].hash);
        })
        .catch((err) => {
            console.error(err);
        });
};

export { sendTestMsg };
