import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');

class RouterHandler {
	constructor() {
		this.createRoutes();
	}

	createRoutes() {
		const routes = [
			{ path: '/', page: Stories },
			{ path: '/new', page: Stories },
      { path: '/ask', page: Stories },
			{ path: '/show', page: Stories },
			{ path: '/favorites', page: Stories }
		];

		routes.forEach((route) => {
			router
				.on(route.path, () => {
					route.page()
				})
				.resolve();
		});
	}
}

export default RouterHandler;
