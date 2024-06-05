const express = require('express');
const path = require('path');

//views is for html

const app = express();
app.listen(8080, () => {
    console.log('Listening on port 8080. http://localhost:8080/ \n');    
});

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Test");
});