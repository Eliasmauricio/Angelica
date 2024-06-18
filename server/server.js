const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// Configurações do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', // Atualize com a senha que você configurou
    database: 'massage_therapist'
});

// Conectar ao MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));
app.use('/imagens', express.static(path.join(__dirname, '../imagem')));

// Rota para manipulação do formulário de contato
app.post('/submit_form', (req, res) => {
    const { name, email, phone, message } = req.body;
    const sql = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao enviar a mensagem.');
            return;
        }
        res.status(200).send('Mensagem enviada com sucesso!');
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});