// API ROUTES//

const notesData = require('../../../db/db.json');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {
    notesData.push(req.body);
    // how to add to db.json file too ?? //
  });
};
