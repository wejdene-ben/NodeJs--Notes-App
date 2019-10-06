// console.log("starting notes.js")
// var add =(x,y)=>{
//     return x+y;
// }
// var sub =(x,y)=>{
//     return x-y;
// }

// module.exports = {
//         add,
//         sub
// }

const fs = require('fs');

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.txt"));
    } catch (err) {
        return [];
    }
}

var addingNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    notes.push(note)
    fs.writeFileSync("notes.txt", JSON.stringify(notes))
logNote(note)
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) =>  note.title !== title )
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes))
}

var readNote = (title) => {
    var notes = fetchNotes();

    var filteredNotes = notes.filter((note) =>  note.title === title )
// console.log(filteredNotes)
logNote(filteredNotes[0])
}

var getAll =()=>{
    var notes = fetchNotes();

    // console.log(notes)
    notes.forEach((note)=>logNote(note))}

var logNote = (note)=>{
    console.log("*********")
    console.log('Title: $(note.title)')
    console.log('Body: $(note.body)')
}


module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}