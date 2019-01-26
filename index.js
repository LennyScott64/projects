var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'))

app.get('/', function(req, res){
    res.render('index');
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/news/:id', function(req, res){
    var obj = {
        title: 'Мое название',
        id: 1,
        paragraphs: [
            'John',
            'Meggie',
            'Peter',
            117
        ]
    }
    res.render('news', {newsId: req.params.id, obj: obj})
})

app.post('/about', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about');
})

app.listen(3000);
