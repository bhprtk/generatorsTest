const fetch = require('node-fetch');
// const co = require('co');

// fetch('http://jsonplaceholder.typicode.com/posts/1')
// 	.then(response => response.json())
// 	.then(post => post.title)
// 	.then(title => console.log ('title:', title))

run(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1';
	const response = yield fetch(uri);
	console.log ('response:', response)
	const post = yield response.json();
	console.log ('post:', post)
	const title = post.title;
	console.log ('title:', title);
});

function run(generator) {
	const iterator = generator();
	const iteration = iterator.next();
	const promise = iteration.value;
	promise.then(x => {
		const anotherIterator = iterator.next(x);
		const anotherPromise = anotherIterator.value;
		anotherPromise.then(y => iterator.next(y))
	});
}
