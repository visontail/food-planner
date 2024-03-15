const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const client = require('./config/index.js');
const itemRoute = require('./routes/items.js');

app.use(bodyParser.json());

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

app.get("/", (req, res) => {  
    res.send("food-planner backend");
});

async function connect(client) {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    }
    catch (e) {
        console.error(e);
    } 
}
connect(client);

app.use('/fooditem', itemRoute);

app.listen(3000, () => {  
    console.log("Server running on 3000");
});

