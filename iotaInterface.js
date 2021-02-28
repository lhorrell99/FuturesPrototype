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
        "UIRHGFXXUZKRVDIWO9GVRDBBITRCLDAGVNKMDCTAXIYWMVVVTKSGMHVAZHESQVV9OXRHNZZJVBASKTFZA";

    const seed =
        "PAMCONCTZFSSVEIKALHS9YVXOYTZZIRZRIWXBJ9CZVYTNMVEMAA9QFRMRWZSEESMTSGLNICYHZFMUTUEO";

    const message = JSON.stringify({ message: msg });
    const messageInTrytes = Converter.asciiToTrytes(message);

    const transfers = [
        {
            value: 5.0,
            address: address,
            message: messageInTrytes,
        },
    ];

    return iota.prepareTransfers(seed, transfers).then((trytes) => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    });
};

export { sendTransaction };
