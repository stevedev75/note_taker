const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});