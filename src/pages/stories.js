import view from '../utils/view.js';
import Story from '../components/Story.js';

export default async function Stories(path) {
	const stories = await getStories(path);
	const hasStories = stories.length > 0;

	view.innerHTML = `<div>
     ${
				hasStories
					? stories
							.map((story, index) => Story({ ...story, index: index + 1 }))
							.join('')
					: 'No stories'
			}
   </div>`;
}

async function getStories(path) {
	const isHomeRoute = path === '/';
	const isNewRoute = path === '/new';

	if (isHomeRoute) {
		path = '/news';
	} else if (isNewRoute) {
		path = '/newest';
	}

	const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);

	const stories = await response.json();

	return stories;
}
