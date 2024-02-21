import express from 'express';

const app = express();
const port = 8000;

app
	.route('/users')
	.get((req, res) => res.send('Get a user'))
	.post((req, res) => res.send('Add a user'))
	.put((req, res) => res.send('Update a user'))
	.delete((req, res) => res.send('Delete a user'));

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}`);
});
