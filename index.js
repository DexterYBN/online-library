const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/index"));

mongoose.connect("mongodb+srv://into:code@cluster0.kxhfay3.mongodb.net/Library?retryWrites=true&w=majority")
  .then(() => {
    console.log("Сервер успешно соединен с MongoDB")
    app.listen(4000, () => {
      console.log("Сервер успешно запущен")
    })
  })