const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/donate', (req, res) => {
    const donationData = req.body;
    res.render('confirmation', { donation: donationData });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
