const express = require("express");
// initialize the express

const app = express();
// put in the app variable

const dbConfig = require('./db');

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`Server running on port ${port}`));