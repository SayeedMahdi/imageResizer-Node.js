const {errorHandler,notFound} = require('./middleware/errorHandler');
const dbConnect = require('./config/dbConnection');
require("dotenv").config();
const routes = require("./routes");

const express = require('express');
const app = express();

dbConnect();

app.use("/api/v1",routes);
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000,console.log(`Connected to port ${process.env.PORT}`));