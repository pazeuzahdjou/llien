const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
let tasks = [];
let nextId = 1;


app.get('/tasks', (req, res) => {
    try {
        res.json({
            success: true,
            count: tasks.length,
            tasks: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des tâches'
        });
    }
});


app.post('/tasks', (req, res) => {
    try {
        const { title, description, completed = false } = req.body;

       
        if (!title || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Le titre est requis et doit être une chaîne non vide'
            });
        }

        const newTask = {
            id: nextId++,
            title: title.trim(),
            description: description ? description.trim() : '',
            completed: Boolean(completed),
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);

        res.status(201).json({
            success: true,
            message: 'Tâche créée avec succès! Merci',
            task: newTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'il y a une erreur lors de la création de la tâche'
        });
    }
});


app.get('/', (req, res) => {
    res.json({
        message: 'API de gestion des tâches',
        endpoints: {
            'GET /tasks': 'Lister toutes les tâches',
            'POST /tasks': 'Créer une nouvelle tâche'
        }
    });
});


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'on arrive pas à trouver la route'
    });
});


app.listen(PORT, () => {
    console.log(` Serveur démarré sur le port ${PORT}`);
    console.log(` API disponible à l'adresse: http://localhost:${PORT}`);
});

module.exports = app;