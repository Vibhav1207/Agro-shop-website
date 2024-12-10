import mongoose from "mongoose";
import Product from "../../models/productModel";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGO_URI);
  }
  const products = await Product.find();
  res.status(200).json(products);
}
