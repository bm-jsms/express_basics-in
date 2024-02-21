import express from 'express';

const teachers = express.teachers();

teachers.get('/all', (req, res) => {
	res.send('All teachers');
});

teachers.post('/add', (req, res) => {
	res.send('Add a teacher');
});

teachers.put('/update', (req, res) => {
	res.send('Update a teacher');
});

teachers.delete('/delete', (req, res) => {
	res.send('Delete a teacher');
});

export default teachers;
