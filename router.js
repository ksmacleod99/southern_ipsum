/*const LoremIpsum = require("./generator.js"); */
const querystring = require("querystring");
const fs = require("fs"); //module required to get contents of different files in our app; stands for 'file system'
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

//require express and create router object
const express = require('express');
const router = express.Router();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

//first route definition is the GET route and sends contents of index.html to the client. Configures node.js server to respond to this route.
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
        //generate l.i. text 
       let loremIpsumText = lorem.generateParagraphs(numOfParagraphs);
        //capture contents of index.html in a var
        let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
        //replace placeholder div with l.i. text
        fileContents = fileContents.replace("<div class='placeholder-div'></div>", loremIpsumText);;
        //send response to client with modified index.html file
        response.setHeader('Content-Type', 'text/html');
        response.write(fileContents);
        response.end(); 
        console.log(loremIpsumText);
    });
});


module.exports = router;