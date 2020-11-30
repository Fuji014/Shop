const mongoose = require("mongoose");
const env = require("dotenv");
const connectDb = require("./config/db");

const users = require("./data/user");
const products = require("./data/products");

const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");

// config
env.config();
connectDb();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    consolog.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    consolog.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
