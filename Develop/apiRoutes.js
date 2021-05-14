const fs = require('fs')

module.exports = (app) => {

let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

 app.get('/api/notes', (req, res) => res.json(noteList));


 app.post('/api/notes', (req, res) => {
 noteList.push({...req.body });
   });

//app.delete('/api/notes/:id', (req, res) => {  
//let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
//noteList.splice(noteList.indexOf(findNote), 1);
//res.end("Note was deleted");  
//  });
 };
