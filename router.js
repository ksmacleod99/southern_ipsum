const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs"); //module required to get contents of different files in our app; stands for 'file system'

//require express and create router object
const express = require('express');
const router = expres.Router();

//first route definition is the GET route and sends contents of index.html to the client
//route that serves index.html
router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    //captures contents of index.html in a variable
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});

    //send response to the client with the index.html file
    response.write(fileContents);
    response.end();
})

//deals with the value submitted by the user
//route that generates l.i. test and reloads modified index.html
router.post('/', (request, response) =>{
    request.on("data", function(inputValue){
        //convert POST data into readablle string
        let query = inputValue.toString(); //number of paragraphs
        //parse query into key:value pair and store value in numOfParagraphs in a variable
        let numOfParagraphs = querystring.parse(query).numOfParagraphs;
        //generate l.i. text with getAllParagraphs function
        let loremIpsumText = loremIpsumText.getAllParagraphs(numOfParagraphs);
        //capture contents of index.html in a var
        let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
        //replace placeholder div with l.i. text
        fileContents = fileContents.replace("<div class='placeholder-div'></div>", loremIpsumText);;
        //send response to client with modified index.html file
        response.setHeader('Content-Type', 'text/html');
        response.write(fileContents);
        response.end();
    });
});

module.exports = router;