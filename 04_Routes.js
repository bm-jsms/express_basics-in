import express from 'express';
import router from './04_Students.js';
import teachers from './04_Teachers.js';

const app = express();
const port = 8000;

app.use('/students', router);
app.use('/teachers', teachers);

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
