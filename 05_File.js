import express from 'express';
import path from 'path';

const app = express();
const port = 8000;

app.use(express.static('./static'));

app.get('/', (req, res) => {
	res.sendFile(path.join(process.cwd(), './static/home.html'));
});

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
