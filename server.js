const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'escuela_db'
});

// Ruta para registrar un usuario
app.post('/api/usuarios', (req, res) => {
    const { nombre, email, contrasena } = req.body;
    db.query('INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)', 
    [nombre, email, contrasena], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ mensaje: "Usuario registrado" });
    });
});

// Ruta para agregar una tarea
app.post('/api/tareas', (req, res) => {
    const { titulo, descripcion, proyecto_id, asignado_a } = req.body;
    db.query('INSERT INTO tareas (titulo, descripcion, proyecto_id, asignado_a) VALUES (?, ?, ?, ?)', 
    [titulo, descripcion, proyecto_id, asignado_a], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ mensaje: "Tarea creada" });
    });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
 