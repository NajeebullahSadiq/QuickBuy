import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";

const BoyJeansRouter = express.Router();

BoyJeansRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ productType: "BoysJeansData" });
    res.send(products);
  })
);

BoyJeansRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const bJeans = await Product.findById(req.params.id);
    if (bJeans) {
      res.send(bJeans);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
export default BoyJeansRouter;
