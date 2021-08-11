//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
});

//Export function to create "SomeModel" model class
module.exports = Item = mongoose.model("item", ItemSchema);
