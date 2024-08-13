import express from 'express'
import bodyParser from 'body-parser'

const port = 3000;
const app = express();
let posts = [
    {title: "Sample post1", content: "hello"}, 
    {title: "Sample post2", content: "hello again"}
];

// when ejs file search for static files, it will look into public folder
app.use(express.static('public'));
// parse the request and fill req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log(`the server is listening on port ${port}`);
});

app.get('/', function (req, res) {
    res.render('ejs/home.ejs', {posts: posts});
});