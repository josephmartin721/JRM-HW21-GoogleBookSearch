const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware definition
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Define API routes here
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});