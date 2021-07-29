const express = require('express')
const app = express()
const session = require('express-session')
const port = process.env.PORT

app.get("*", (req, res) => {
    res.send("<h1>Welcome to OLX Server</h1>");
});
// app.use(session({
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     secret: 'keyboard cat'
// }));

app.get('/', function (req, res) {
    console.log('Request' + JSON.stringify(req))
    var body = '';
    if (req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers :)</p>';
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

app.listen(port, () => {
    console.log(`Server Started Successfully`)
})