const app = require('./app');

const { connectDBs } = require('./db/index');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5014
const PORT = process.env.PORT || 5014;

connectDBs().then(() => {
	app.listen(PORT, () => {
		console.log(
			`MS_Projects Server listening on http://http://localhost:${PORT}`
		);
	});
});
