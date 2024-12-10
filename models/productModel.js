import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
