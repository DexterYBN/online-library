const Book = require("../models/Book.model");

module.exports.bookController = {
  addBooks: async (req, res) => {
    try {
      const addBook = await Book.create({
        name: req.body.name,
        genres: req.body.genres,
        userRent: req.body.userRent,
      });
      res.json("нига добавлен(максимальное осуждение)");
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteBooksById: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      res.json("нига удален(максимальное осуждение)");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchBooksbyId: async (req, res) => {
    try {
      const patchBook = await Book.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          genres: req.body.genres,
          userRent: req.body.userRent,
        },
        { new: true }
      );
      res.json("нига изменен(максимальное осуждение)");
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllbooks: async (req, res) => {
    try {
      const allBooks = await Book.find()
      res.json(allBooks);
    } catch (e) {
      res.json(e.message);
    }
  }
};
