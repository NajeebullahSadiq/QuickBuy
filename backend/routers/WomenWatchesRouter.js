import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";

const WomenWatchesRouter = express.Router();

WomenWatchesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ productType: "WomenWatchesData" });
    res.send(products);
  })
);


WomenWatchesRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
export default WomenWatchesRouter;
