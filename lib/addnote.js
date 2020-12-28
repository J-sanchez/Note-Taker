const fs = require("fs");
const path = require("path");

function addNote(body, notesArray) {
    const note = body;
    notes.push(Newnote);

    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db,json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}

module.exports = addNote;