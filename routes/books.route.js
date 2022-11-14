const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");

const router = Router();

router.post("/admin/books", bookController.addBooks);
router.delete("/admin/books/:id", bookController.deleteBooksById);
router.patch("/admin/books/:id", bookController.patchBooksbyId);
router.get("/books", bookController.getAllbooks);

module.exports = router;