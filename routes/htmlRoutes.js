var db = require("../models");
module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log(username)
    
      res.render("index", {
    }
  )})
  app.get("/autoflipper/login", function (req, res) {
    let username = req.session.username;
    if (username === "") {
      res.render("login", {
        username
      });
    } else {
      res.render("login", {
      });
    }
  });
  app.get("/autoflipper/sell-your-vehicle", function (req, res) {
    let username = req.session.username;
    if (username === "") {
      res.render("sell", {
      });
    } else {
      res.render("sell", {
      });
    }
  });
  app.get("*", function (req, res) {
    res.render("404");
  });
  app.get("/results", function (req, res) {
    res.render("search", {
      msg: "Results"
    });
  });
  app.get("/autoflipper/api/vehicle/all", function (req, res) {
    db.vehicle.findAll({}).then(function (allVehicle) {
      res.json(allVehicle);
    });
  });
  app.get("/autoflipper/api/vehicle/:make", function (req, res) {
    var model = req.params.make;
    db.vehicle.findAll({
      where: {
        model: model
      }
    }).then(function (listmake) {
      res.json(listmake);
    });
  });
  app.get("/autoflipper/api/vehicle/:make/:model/:yearmin/:yearmax/:pricemin/:pricemax", function (req, res) {
    console.log(req.params)
    //console.log(req.body);
    var yearA;
    var yearB;
    var priceA;
    var priceB;
    let whereClause = {
    }
    console.log(yearA, yearB, priceA, priceB)
    //Check if Make has been selected 
    if (req.params.make === "Make") {
      res.status(404).json({
        error: 'Make has not been selected'
      })
    } else {
      whereClause.make = req.params.make;
      // return whereClause.model;
    }
    ///////////////////
    if (req.params.model === "Model") {} else {
      whereClause.model = req.params.model;
      //return whereClause.model;
    }
    /////////////////////
    if (isNaN(req.params.yearmin)) {
      yearA = 2000;
      if (isNaN(req.params.yearmax)) {
        yearB = 2019
        console.log(yearB)
        whereClause.year = {
          [Op.between]: [yearA, yearB]
        }
      } else {
        yearB = req.params.yearmax;
        whereClause.year = {
          [Op.between]: [yearA, yearB]
        }
        //return whereClause.model;
      };
    } else {
      yearA = req.params.yearmin;
      if (isNaN(req.params.yearmax)) {
        YearB = 2019
        whereClause.year = {
          [Op.between]: [yearA, yearB]
        }
      } else {
        yearB = req.params.yearmax;
        whereClause.year = {
          [Op.between]: [yearA, yearB]
        }
        //return whereClause.model;
      }
      //return whereClause.model;
    };
    if (isNaN(req.params.pricemin)) {
      // whereClause.pricemin = 0;
      priceA = 0;
      if (isNaN(req.params.pricemax)) {
        priceB = 200000
        whereClause.price = {
          [Op.between]: [priceA, priceB]
        }
      } else {
        priceB = req.params.pricemax;
        whereClause.price = {
          [Op.between]: [priceA, priceB]
        }
      };
    } else {
      priceA = req.params.pricemin;
      if (isNaN(req.params.pricemax)) {
        priceB = 200000
        whereClause.price = {
          [Op.between]: [priceA, priceB]
        }
      } else {
        priceB = req.params.pricemax;
        whereClause.price = {
          [Op.between]: [priceA, priceB]
        }
      }
    };
    //console.log(whereClause, +"    " + yearA, +"    " + yearB, +"    " + priceA, +"    " + priceB)
    // whereClause.year = {
    //   [Op.between]: [req.params.yearmin, req.params.yearmax]
    // }
    if (whereClause.length == 0) {
      res.status(404).json(data);
      console.log(data);
    }
    console.log(whereClause);
    db.vehicle.findAll({
      where: whereClause
      /*year: {
        [Op.between]: [yearA, yearB]
      },
      price: {
        [Op.between]: [priceA, priceB]
      }
      */
      //   [Op.between]: [yearA, yearB],
      // [Op.between]: [priceA, priceB]
      // where: {
      //   model: req.params.model,
      //   make: req.params.make,
      //   year: {
      //     [Op.between]: [req.params.yearmin, req.params.yearmax]
      //   },
      //   price: {
      //     [Op.between]: [req.params.pricemin, req.params.pricemax]
      //   }
      // }
    }).then(function (data) {
      res.render("search", {
        vehicle
      })
    });
  })
};