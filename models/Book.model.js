const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // genres: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'Genre'
  // },
  // userRent: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   // required: true,
  //   ref: 'User'
  // },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;