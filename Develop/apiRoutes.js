const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {


 app.get('/api/notes', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  return res.json(data)});


 app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  data.push(newNote);
  fs.writeFileSync('./db/db.json',JSON.stringify(data));
  return res.json(data) });

 };
