import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
		res.write('<h1>Hello World</h1>');
		res.end();
	} else if (req.url === '/about') {
		res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
		res.write('<h1>About Us</h1>');
		res.end();
	} else {
		res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html' });
		res.write('<h1>Page Not Found</h1>');
		res.end();
	}
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
