const express = require("express");

module.exports = (tasks) => {
  const router = express.Router();

  // Route POST /tasks → ajouter une tâche
  router.post("/", (req, res) => {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Le champ 'title' est requis" });
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  });

  return router;
};
