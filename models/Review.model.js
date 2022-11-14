const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  book: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;