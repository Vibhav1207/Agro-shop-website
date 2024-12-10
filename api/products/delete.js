import mongoose from "mongoose";
import Product from "../../models/productModel";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI);
    }
    await Product.findByIdAndDelete(req.query.id);
    res.status(200).json({ message: "Product deleted!" });
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
