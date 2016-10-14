const fetch = require('node-fetch');
const co = require('co');

// fetch('http://jsonplaceholder.typicode.com/posts/1')
// 	.then(response => response.json())
// 	.then(post => post.title)
// 	.then(title => console.log ('title:', title))

co(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1';
	const response = yield fetch(uri);
	const post = yield response.json();
	const title = post.title;
	console.log ('title:', title);
})
