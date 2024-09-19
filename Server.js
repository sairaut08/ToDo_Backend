const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("../backend/routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Db connected successfully..."))
  .catch((err) => console.log(err));

app.use("/api", routes);
app.listen(PORT, () => console.log(`Listening at ${PORT}....`));
