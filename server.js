const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const api = require('./api');
const app = express();

app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("hello world");
});
app.use('/api', api);
