require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path")
const db = require("./models");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3000;
const Sequelize = require("sequelize")
const sequelizeStore = require("connect-session-sequelize")(session.Store);
//

//database creation
var sequelize = new Sequelize({
  database: process.env.DB,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  storage: "./session.mysql",
  /*host: "localhost",
  database: "autoflipper_db",
  username: "root",
  password: "root",
  storage: "./session.mysql",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  */
})
//Session
app.use(session({
  secret: 'fllipper',
  store: new sequelizeStore({
    db: sequelize,
    proxy: true
  }),
  resave: false,
  proxy: true

}))

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
); //
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false,
  // logging: console.log
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models -----------------------------------w-/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/autoflipper in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;