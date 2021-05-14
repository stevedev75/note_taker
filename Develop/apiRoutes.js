const fs = require('fs')

module.exports = (app) => {


 app.get('/api/notes', (req, res) => {
  let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  return res.json(noteList)});


 app.post('/api/notes', (req, res) => {
  let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
 noteList.push({...req.body });
 fs.writeFileSync('./db/db.json',JSON.stringify(noteList))
  return res.json(noteList) });

//app.delete('/api/notes/:id', (req, res) => {  
//let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
//noteList.splice(noteList.indexOf(findNote), 1);
//res.end("Note was deleted");  
//  });
 };
