const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/add-product", productController.addProduct);
router.get("/get-product", productController.getProducts);
router.get("/get-product-id/:id", productController.getProductById);
router.put("/update-product/:id", productController.editProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;