var express = require('express')
var app = express()
var fs = require('fs')
app.use(express.static('staticTestFolder'));
express.static.mime.define({'application/octet-stream': ['json']})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req, res) => {
    console.log(req.query)
    fs.readFile('./staticTestFolder/json1.json', {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let dataTest = JSON.parse(data)
            dataTest.name = req.query.name
            dataTest.name2 = req.query.name2
            let afterDataTest = JSON.stringify(dataTest)
            fs.writeFile('./staticTestFolder/json1.json', afterDataTest, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("УСПЕХ")
                }
            })
        }
    })
    res.send('Hello Word')
});

app.get('/getJson', (req, res) => {
    fs.readFile('./staticTestFolder/json1.json', {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log('WORK')
})