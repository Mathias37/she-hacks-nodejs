const express = require("express"); //import express
const app = express(); //create an express app
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/details", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
    );
});

// attach the server to a port(1)
// go to the browser and type the port(2)

app.get("/colors", (req, res) => {
    res.send(["red", "blue", "yellow", "pink"]);
});
app.get("/fruits", (req, res) => {
    res.send(["apple", "orange", "mango", "water melon", "avocado"]);
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send(`Username is ${req.body.username} and password is ${req.body.password}`);
});

// error page default rout(404)(7)
app.use("*", (req, res) => {
    res.status(404).send("<h1>404, page not found</h1>");
    if(req.body.username==='mathias' && req.body.email  === 'xty'){
        res.send('login successful')
    }else{
            res.send('password or username incorrect')
        }
        console.log(req.body)
    }
);


app.listen(3000, () => console.log("Server running at port 3000"));


//mongodb+srv://Mathias37:<password>@cluster0-zhuep.mongodb.net/test?retryWrites=true&w=majority

