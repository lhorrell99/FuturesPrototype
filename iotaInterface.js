import Iota from "@iota/core";
import Converter from "@iota/converter";

const iota = Iota.composeAPI({
    provider: "https://nodes.devnet.iota.org:443",
});

const sendTransaction = function (msg) {
    // returns a promise of the transaction bundle for a successfully recorded transaction
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
            value: 5,
            address: address,
            message: messageInTrytes,
        },
    ];

    return iota.prepareTransfers(seed, transfers).then((trytes) => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    });
};

export { sendTransaction };
