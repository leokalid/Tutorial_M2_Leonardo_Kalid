const express = require('express');
const path = require('path');
const app = express();

// Definir uma rota para servir o currículo
app.get('/curriculo', (req, res) => {
    res.sendFile(path.join(__dirname, 'curriculo.html'));
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});
