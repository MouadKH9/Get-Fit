const helpers = require("../services/helpers");
const mongoose = require("mongoose");
module.exports = app => {
  app.get("/api/getData", (req, res) => {
    if (!req.user) res.send({ error: true });
    else {
      delete req.user.data.init;
      res.send(req.user.data);
    }
  });
  app.get("/api/addLog", (req, res) => {
    let user = mongoose.model("users");
    user.findById(req.user._id, (err, prev) => {
      let date = req.query.date;
      if (date === "today") date = helpers.getCurrentDay();
      prev.data[date] = req.query.value;
      user.findByIdAndUpdate(
        req.user._id,
        { data: prev.data },
        (err, finalRes) => {
          if (err) console.log(err);
          user.findById(req.user._id, (err, finalRes) => {
            delete finalRes.data.init;
            res.send(finalRes.data);
          });
        }
      );
    });
  });
  app.get("/api/init", (req, res) => {
    let user = mongoose.model("users");
    user.findById(req.user._id, (err, prev) => {
      prev.data[helpers.getCurrentDay()] = req.query.current;
      user.findByIdAndUpdate(
        req.user._id,
        {
          data: prev.data,
          "info.goal": req.query.goal,
          "info.rate": req.query.rate
        },
        (err, user) => {
          if (!err) res.send({ ok: true });
          else console.log(err);
        }
      );
    });
  });
};
