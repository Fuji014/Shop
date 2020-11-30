const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

// middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// config
const app = express();
app.use(cors());
env.config();

// connect db
connectDb();

// routes
const productRoutes = require("./routes/product");

// middleware
app.use(cors());
app.use("/api", productRoutes);

// custom error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`Server runing on port ${process.env.PORT}`)
);
