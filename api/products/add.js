import mongoose from "mongoose";
import Product from "../../models/productModel";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI);
    }
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added!" });
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
