import express from 'express';

const app = express();
const port = 8000;

// Regex
app.get(/x/, (req, res) => {
	res.send('<h1>This shows for any URL that contains the letter "x"</h1>');
});

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
