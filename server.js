const express = require('express');
const app = express();
const port = 3000;

app.get('/track', (req, res) => {
    const url = req.query.url;
    const userLocation = req.ip; // This is a placeholder for actual location tracking
    console.log(`Link opened by: ${userLocation}, URL: ${url}`);
    res.redirect(url);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
