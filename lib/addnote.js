var fs = require('fs');
var path = require('path');

function addNote(body, notesArray) {
	var note = body;
	notes.push(note);

	fs.writeFileSync(
		path.join(__dirname, '../Develop/db/db,json'),
		JSON.stringify(
			{
				notes: notesArray,
			},
			null,
			2
		)
	);

	return note;
}

module.exports = addNote;
