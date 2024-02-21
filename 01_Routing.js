import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('<h1>Welcome to Express.js</h1>');
});

app.get('/about', (req, res) => {
	res.send('<h1>About ⭐️</h1>');
});

app.use((req, res) => {
	res.status(404).send('<h1>404 Page Not Found!</h1>');
});

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
