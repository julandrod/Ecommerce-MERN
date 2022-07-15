import { StatusCodes } from "http-status-codes";
import { NotFoundError, BadRequestError } from "../errors/index.js";
import Product from "../models/Product.js";
import path from "path";

export const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

export const getAllProducts = async (req, res) => {
  const { category, sort, size, gender, search } = req.query;
  const queryObject = {};

  if (category && category !== "all") {
    queryObject.category = category;
  }
  if (size && size !== "all") {
    queryObject.size = size;
  }
  if (gender && gender !== "all") {
    queryObject.gender = gender;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let result = Product.find(queryObject);

  // sort conditions
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }
  if (sort === "lowest") {
    result = result.sort("price");
  }
  if (sort === "highest") {
    result = result.sort("-price");
  }

  const products = await result;
  const count = await Product.countDocuments(queryObject);

  res.status(StatusCodes.OK).json({ products, count });
};

export const getSingleProduct = async (req, res) => {
  // get id renamed to productId from params
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new NotFoundError(`No product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new NotFoundError(`No product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

export const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new NotFoundError(`No product with id: ${productId}`);
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed" });
};

export const uploadImage = async (req, res) => {
  console.log(req.files);
  if (!req.files) {
    throw new BadRequestError("No file uploaded");
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please upload an image");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new BadRequestError("Please upload an image smaller than 1MB");
  }

  // const imagePath = path.join(
  //   __dirname,
  //   "../public/uploads/" + `${productImage.name}`
  // );

  const { pathname: imagePath } = new URL(
    "../public/uploads/" + `${productImage.name}`,
    import.meta.url
  );

  await productImage.mv(imagePath);

  res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}` });
};
