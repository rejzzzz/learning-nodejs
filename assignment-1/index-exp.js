const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});
app.get((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server running on PORT http://localhost:${PORT}`);
});
