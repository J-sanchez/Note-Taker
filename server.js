const express = require('express');
const apiRoutes = require('./routes/api');
const Routes = require('./routes/html');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});