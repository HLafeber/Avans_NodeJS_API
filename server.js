//Use the Express import defined in the package.json
const express = require('express');
//Include the pre-defined RFC codes
const status = require('./RFC/status.js');
//Initialize Express
const app = express();
//Port the server will listen to (HTTP listner)
const port = 3000;
//The current status code from the enum.
let currentCode = status.statuscode.RF218;

//Catch all default requests
app.get('/', (req, res) => {
    //Set status code, will probably be changed later.
    res.status(218);
    //Switch based on the statuscodes
    switch(currentCode)
    {
        case status.statuscode.RF218:
            res.header(status.statuscode.RF218);
            res.sendFile('./RFC/this_is_fine.jpg', { root: __dirname });
            break;
        default:
            console.log(req.path);
            //Check if client is browser or not, if browser, send a html response.
            if (req.headers['user-agent'].includes('Mozilla'))
            {
                res.sendFile('./RFC/page/header.html', { root: __dirname });
            }
            else{
                res.send(currentCode);
            }
            break;
    }
});

//If browser, it'll try to fetch the style css for the header.html, this'll send that css as a response.
app.get('/RFC/page/styles.css', (req, res) => {
    res.sendFile('./RFC/page/style.css', { root: __dirname});
});

//callback function.
let serverCallback = function() {
    console.log('starting server on port ' + port);
};

//Start server.
app.listen(port, serverCallback);