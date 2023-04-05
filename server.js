const http = require('http');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	console.log(Date.now() + ' Ping Received');
	response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
	http.get('https://odd-puce-goat-tutu.cyclic.app');
}, 280000);
