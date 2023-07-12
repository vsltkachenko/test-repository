let value = false

export function myFn() {
	value = true
	console.log('myFn')
}

setTimeout(() => {
	if (value) {
		console.log('Hello World')
	}
}, 0)


