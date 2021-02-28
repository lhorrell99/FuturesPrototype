const Ajax = Object.create(null);

const json = (response) => response.json();

Ajax.query = function (requestObj) {
    // return Promise.resolve({
    //     "message": "It's a fake!"
    // });

    return window
        .fetch("/", {
            method: "POST",
            body: JSON.stringify(requestObj),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(json);
};

export default Object.freeze(Ajax);
