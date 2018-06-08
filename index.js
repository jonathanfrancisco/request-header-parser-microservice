
const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
    res.send({
        ipaddress: req.socket.localAddress,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});

app.get('*', (req, res) => {
    res.status(404).send();
});


app.listen(3000 || process.env, () => {
    console.log(`Server started on port ${3000 || process.env}`);
});