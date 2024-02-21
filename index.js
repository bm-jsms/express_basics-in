import express from 'express';

const app = express();
const port = 8000;

app.get(/x/, (req, res) => {
	res.send('<h1>This shows for any URL that contains the letter "x"</h1>');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
	const { userId, bookId } = req.params;
	res.send(`<h1>User ID: ${userId}, Book ID: ${bookId}</h1>`);
});

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
