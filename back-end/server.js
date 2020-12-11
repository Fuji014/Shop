const path = require("path");
const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const morgan = require("morgan");

// middlewares
const { notFound, errorHandler } = require("./middleware/error.middleware");

// config
const app = express();

env.config();

// connect db
connectDb();

// routes
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/user.route");
const orderRoutes = require("./routes/order.route");
const uploadRoutes = require("./routes/upload.route");

// middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../front-end/build")));

  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../front-end", "build", "index.html"))
  );
}
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// custom error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`Server runing on port ${process.env.PORT}`)
);
