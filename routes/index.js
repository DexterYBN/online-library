const { Router } = require("express");

const router = Router();

router.use(require("./reviews.route"));
router.use(require("./route.user"));
router.use(require("./books.route"));
router.use(require("./genres.route"));

module.exports = router;