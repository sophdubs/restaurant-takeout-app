// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Require functions from dbHelpers
const dbHelpers = require("./helpers/dbHelpers")(db);

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(
  cookieSession({
    name: "session",
    keys: ["secretkey", "secretkey2"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

// const completedOrderRoutes = require("./routes/completed_order");
const menuRoutes = require("./routes/menu");
const ordersRoutes = require("./routes/orders");
const usersRoutes = require("./routes/users");
const userLogin = require("./routes/login");
const userRegister = require("./routes/register");
const completedOrderRoutes = require("./routes/completed_order");
const userLogout = require("./routes/logout");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

// app.use("/orders/completed", completedOrderRoutes(dbHelpers));
app.use("/login", userLogin(dbHelpers));
app.use("/register", userRegister(dbHelpers));
app.use("/orders", ordersRoutes(dbHelpers));
app.use("/completed_order", completedOrderRoutes(dbHelpers));
app.use("/menu", menuRoutes(dbHelpers));
app.use("/api/users", usersRoutes(dbHelpers));
app.use("/logout", userLogout(dbHelpers));
// app.use("/api/widgets", widgetsRoutes(dbHelpers));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  let templateVars = {
    isLoggedIn: JSON.stringify(req.session)
  };
  res.render("index", templateVars);
});

app.get("/admin", (req, res) => {
  res.render('admin');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


