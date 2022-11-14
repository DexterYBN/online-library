const Review = require("../models/Review.model");

module.exports.reviewsController = {
  getAllReviews: async (req, res) => {
    try {
      const showAll = await Review.find();
      res.json(showAll);
    } catch (error) {
      res.json(error.message);
    }
  },
  getrReviewsById: async (req, res) => {
    try {
      const showById = await Review.findById(req.params.id);
      res.json(showById);
    } catch (error) {
      res.json(error.message);
    }
  },
  postReviews: async (req, res) => {
    try {
      await Review.create({
        text: req.body.text,
        user: req.body.user,
        book: req.body.book,
      });
      res.json("Отзыв добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },
  patchReviews: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        user: req.body.user,
        book: req.body.book,
      });
      res.json("Отзыв изменен");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteReviews: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      res.json("Отзыв удален");
    } catch (error) {
      res.json(error.message);
    }
  },
  getReviewsByBook: async (req, res) => {
    try {
      const showRByB = await Review.find({ book: req.params.id });
      res.json(showRByB);
    } catch (error) {
      res.json(error.message);
    }
  },
};
