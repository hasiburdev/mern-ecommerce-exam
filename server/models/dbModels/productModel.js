import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
  },
  img: {
    type: String,
    required: true,
  },
  review: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
    default: 0,
  },
  cupon: {
    type: String,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model("Product", productSchema);
