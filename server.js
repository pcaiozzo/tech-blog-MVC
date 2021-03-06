const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const path = require("path");
const models = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const connection = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: connection,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(require("./controllers/"));

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  connection.sync({ force: false }); //.then(() => require('./seeds'))
});

// app.listen(process.env.PORT || 3000, function () {
//   console.log(
//     "Express server listening on port %d in %s mode",
//     this.address().port,
//     app.settings.env
//   );
// });
