const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 7001;

const items = require("./schema");

const connection_url =
  "mongodb+srv://admin:tD9SnPpEM9Z!N-C@cluster0.mglw2.mongodb.net/mern-shopping-list?retryWrites=true&w=majority";

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected mongodb"))
  .then((err) => console.error());

app.get("/", (req, res) => res.status(200).send("HI"));

app.get("/Home", (req, res) =>
  res.status(200).send("Welcome To Shopping List ")
);
app.post("/post", (req, res) => {
  const data = req.body;
  items.create(data, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/post", (req, res) => {
  items.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`port listening on ${port}`));
