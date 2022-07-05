require("dotenv").config();
const routes = require("./routes/index");
var bodyParser = require("body-parser");

const express = require("express");
const app = express();
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/v1/", routes);

app.listen(process.env.PORT, () => console.log(`Server running on port 5000`));



