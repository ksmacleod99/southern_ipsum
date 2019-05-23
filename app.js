//require express and create an express app instance
const express = require('express');
const app = express();

//require express routes from router.js
const routes = require('./router');

//define hostname and port
const hostname = "127.0.0.1";
const port = 3000;

//directory where static files are found
app.use(express.static('public'));

//specify routes used in app
app.use(routes);

//begin accpeting connections to the port
app.listen(port, ()=> {
    //server location in console
    console.log(`Server is listening at http://${hostname}:${port}/`);
})
