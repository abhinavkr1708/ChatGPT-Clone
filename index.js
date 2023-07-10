const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const Connection = require("./databases/db");
const authentication = require("./routes/authentication");
const errorHandler = require("./middlewares/errorMiddleware");
const openai = require("./routes/openairoutes");
dotenv.config();

Connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);
const PORT = process.env.PORT || 8080;
//API ROUTES
app.use("/api/v1/auth", authentication);
app.use("/api/v1/openai", openai);
app.listen(8080, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});
