import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { checkPermissions } from "../utils/index.js";

export const createOrder = async (req, res) => {
  const { items: cartItems, shippingFee } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new BadRequestError("No cart items provided");
  }
  if (!shippingFee) {
    throw new BadRequestError("Please provide tax and shipping fee");
  }

  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new NotFoundError(`No product with id: ${item.product}`);
    }
    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      color: item.color,
      product: _id,
    };
    // add item to order
    orderItems = [...orderItems, singleOrderItem];
    // calculate subtotal
    subtotal += item.amount * price;
  }
  // calculate total
  const total = shippingFee + subtotal;

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    shippingFee,
    user: req.user.userId,
  });

  res.status(StatusCodes.CREATED).json({ order });
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

export const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOne({ _id: orderId });

  if (!order) {
    throw new NotFoundError(`No order with id: ${orderId}`);
  }
  checkPermissions(req.user, order.user);

  res.status(StatusCodes.OK).json({ order });
};

export const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

export const updateOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOneAndUpdate({ _id: orderId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!order) {
    throw new NotFoundError(`No order with id: ${orderId}`);
  }

  res.status(StatusCodes.OK).json({ order });
};

export const getMonthlyIncome = async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          status: "paid",
          ...(productId && {
            orderItems: { $elemMatch: { name: productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$total",
          productSales: "orderItems.price",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
          test: { $sum: "$productSales" },
        },
      },
    ]);
    res.status(StatusCodes.OK).json({ income });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
