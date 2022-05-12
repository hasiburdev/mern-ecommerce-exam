import Product from "../models/dbModels/productModel.js";

export const getAllProductsFromDB = async () => {
  const products = await Product.find({});
  return products;
};

export const getProductFromDB = async (slug) => {
  const product = await Product.findOne({ slug });
  return product;
};

export const getAllProducts = async (req, res) => {
  const products = await getAllProductsFromDB();

  if (products.toString() === "")
    return res.status(404).json({ message: "Product Not Found!" });

  res.status(200).json(products);
};

export const getProduct = async (req, res) => {
  const product = await getProductFromDB(req.params.slug);
  if (product === null)
    return res.status(404).json({ message: "Product Not Found!" });
  res.status(200).json(product);
};
