const express = require('express');

function fork48(serverPort, gamePath, gameServer) {
	const app = express();

	app.use(express.static(gamePath));

	app.listen(serverPort, () => {
		console.log(`Listening at http://localhost:${serverPort}`);
	});
}

module.exports = fork48;