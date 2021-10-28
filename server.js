const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

const htmlRoutes = require('./routes/htmlRoutes');
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})