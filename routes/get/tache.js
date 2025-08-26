const express = require("express");

module.exports = (tasks) => {
  const router = express.Router();

  // Route GET /tasks → lister toutes les tâches
  router.get("/", (req, res) => {
    res.json({ tasks });
  });

  return router;
};
