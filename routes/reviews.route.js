const { Router } = require("express");

const router = Router();

const { reviewsController } = require("../controllers/reviews.controller");

router.get("/reviews", reviewsController.getAllReviews);
router.get("/reviews/:id", reviewsController.getrReviewsById);
// router.get("/reviews", reviewsController.getReviewsByBook); 
router.post("/user/reviews", reviewsController.postReviews);
router.patch("/admin/reviews/:id", reviewsController.patchReviews);
router.delete("/admin/reviews/:id", reviewsController.deleteReviews);

module.exports = router;