import fs from "fs";

const buildIndex = (transactionHash) => {
    const data = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device_width, initial-scale=1.0" />
            <title>Fair Food Framework</title>
            <style type="text/css" media="screen">
            
            * {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
            }
            
            @font-face {
                font-family: Metropolis Bold;
                src: url('./fonts/Metropolis-Bold.otf');
            }
            
            @font-face {
            font-family: Metropolis Regular;
            src: url('./fonts/Metropolis-Regular.otf');
            }
            
            @font-face {
                font-family: Metropolis Medium;
                src: url('./fonts/Metropolis-Medium.otf');
            }
    
            body, html {
                padding: 3px 3px 3px 3px;
                text-align: center;
                top: 100px;
                left: 50%;
                background-color: #0FC1B7;
            }
    
            h1 {
                font-family: Metropolis Bold;
                font-size: 35px;
                color: #F6F8FC
            }
    
            h2 {
                font-family: Metropolis Bold;
                font-size: 18px;
                color: #F6F8FC
            }
    
            .btn {
                background-color: #EEF2FA; 
                color: #485776; 
                font-family: Metropolis Regular;
                font-size: 18px;
                border: none;
                padding: 10px 20px; 
                text-align: center;
                text-decoration: none;
                display: inline-block;
                margin: 4px 2px;
                border-radius: 16px; 
                transition: 0.2s;
                opacity: 0.90;
            } 
    
            .btn:hover {
                background-color: #F6F8FC;
                font-family: Metropolis Regular;
                color: #131F37;
                cursor: pointer;
                opacity: 1.0;
            }
            </style>
        </head>
        <body> 
            <br>
            <br>
            <br>
            <h1>Fair Food Framework</h1>
            <br>
            <h2>Item recorded. Upload successful.</h2>
            <br>
            <br>
            <a href="https://explorer.iota.org/devnet/transaction/${transactionHash}">
                <button class="btn">View in Tangle Explorer</button>
            </a>
            <div>
                <br>
                <img src="./images/iota-white.png" alt="Powered by Iota" style="width:200px">
            </div>
        </body>
    </html>`;

    fs.writeFile("./public/index.html", data, (error) => {
        if (error) {
            throw error;
        } else {
            console.log("saved");
        }
    });
};

export { buildIndex };
