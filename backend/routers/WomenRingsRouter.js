import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../Model/productModel.js";;


const WomenRingsRouter = express.Router();

WomenRingsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ productType: "WomenRingsData" });
    res.send(products);
  })
);


WomenRingsRouter.get(
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
export default WomenRingsRouter;
