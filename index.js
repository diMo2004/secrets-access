//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const dir = dirname(fileURLToPath(import.meta.url)); 
var count = 0;

app.get("/", (req,res) => {
    res.sendFile(dir+"/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/check",(req,res) => {
    if(req.body.password=="ILoveProgramming")
        res.sendFile(dir+"/public/secret.html");
    else
        res.sendFile(dir+"/public/index.html");
});

