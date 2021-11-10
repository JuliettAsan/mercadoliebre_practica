const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

const port = 3000;

app.listen(process.env.PORT || port, () =>{
    console.log("Servidor funcionando");
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
})
