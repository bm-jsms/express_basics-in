import express from 'express';
import { join } from 'path';
import route from './routes/route.js';

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/', route);

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
