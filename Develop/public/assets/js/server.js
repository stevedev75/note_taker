// SERVER //

const express = require('express');

app.use(express.static('public'));

const fs = require('fs');



// using fs to read and write to db.json file per Anthony's hint @ 6min mark in Mon's class video//
// how do I do this? //

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('/apiRoutes')(app);
require('/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});