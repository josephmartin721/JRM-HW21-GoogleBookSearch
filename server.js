const app = express();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API
app.use("/api", routes);

//Connect to MongoDb
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds031618.mlab.com:31618/heroku_rc5l1st2", {useUnifiedTopology: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});