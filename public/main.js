const json = (response) => response.json();

const query = (requestObj) => {
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

// window.addEventListener("DOMContentLoaded", function () {
//     query({ dummy: "hi" });
// });
