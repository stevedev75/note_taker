const fs = require('fs')




module.exports = (app) => {

  let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

 app.get('/api/notes', (req, res) => res.json(noteList));


   app.post('/api/notes', (req, res) => {
    let lastID;
    if (noteList.length) {
      lastID = Math.max(...noteList(noteList.map(note => note.id)));
    } else {
        lastID = 0;
    }
    const id = lastId + 1;
    noteList.push({ id, ...req.body });

    res.json(noteList.slice(-1));
    });

    app.delete('/api/notes/:id', (req, res) => {  
      let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
      noteList.splice(noteList.indexOf(findNote), 1);
      res.end("Note was deleted");  
  });
};
