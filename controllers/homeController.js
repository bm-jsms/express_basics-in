const homeController = (req, res) => {
	const data = {
		title: 'Home Page',
		id: 12,
	};
	res.render('index', data);
};

export { homeController };
