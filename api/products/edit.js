import mongoose from "mongoose";
import Product from "../../models/productModel";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method === "PUT") {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI);
    }
    await Product.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ message: "Product updated!" });
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
