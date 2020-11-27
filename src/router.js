import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');

class RouterHandler {
	constructor() {
		this.createRoutes();
	}

	createRoutes() {
		const routes = [{ path: '/', page: Stories }];

		routes.forEach((route) => {
			router
				.on(route.path, () => {
					console.log(route.page())
				})
				.resolve();
		});
	}
}

export default RouterHandler;
