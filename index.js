import express from 'express'
import bodyParser from 'body-parser'

const port = 3000;
const app = express();
let posts = [
    {title: "Sample post1", content: "hello", mode: "view", imgUrl: ""}, 
    {title: "Sample post2", content: "hello again", mode: "edit", imgUrl: ""}
];

// set the size limit of the data from browser
app.use(bodyParser.json({limit: '50mb'}));
// when ejs file search for static files, it will look into public folder
app.use(express.static('public'));
// parse the request and fill req.body
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.listen(port, function () {
    console.log(`the server is listening on port ${port}`);
});

app.get('/', function (req, res) {
    res.render('ejs/home.ejs', {posts: posts});
});

app.post('/', function (req, res) {
    createPost(req.body);
    res.redirect('/');
});

app.post('/delete' , function (req, res) {
    deletePost(req.body.index);
    res.redirect('/');
});

app.post('/update', function (req, res) {
    updatePost(req.body.index, req.body.content, req.body.title);
    res.redirect('/');
});

app.post('/edit', function (req, res) {
    if (posts[req.body.index].mode === "view") {
        posts[req.body.index].mode = "edit";
    } else if (posts[req.body.index].mode === "edit") {
        posts[req.body.index].mode = "view";
    }
    res.redirect('/');
});

function createPost(object) {
    if (object.title && object.content) {
        object.mode = "view";
        posts.push(object);
    }
    console.log(object);
}

function deletePost(index) {
    posts.splice(index, 1);
}

function updatePost(index, content, title) {
    // if the post was on view mode, set it to edit
    // if it is on edit, update the content of the post
    posts[index].title = title;
    posts[index].content = content;
    posts[index].mode = "view";
}