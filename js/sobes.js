const some = [1, 2, 3, 4]

// Method map from reduce custom
function mapCustom(arr, cb) {
	return arr.reduce((acc, value, index, array) => {
		acc.push(cb(value, index, array))
		return acc
	}, [])
}

result = mapCustom(some, (el, i) => i * 5)
// console.log('result:', result)

// Method filter from reduce custom
function filterCustom(arr, cb) {
	return arr.reduce((acc, value, index, array) => {
		let ret = cb(value, index, array)
		Boolean(ret) && acc.push(value)
		return acc
	}, [])
}

result2 = filterCustom(some, (v) => {
	return v % 2 === 0
})
// console.log('result2:', result2)

// Method PromiseAll custom
const promises = [
	new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
	new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
	new Promise((resolve, rej) => setTimeout(() => resolve(75), 1000)), // 3
]

function PromiseAll(promises) {
	const results = []
	let count = 0
	return new Promise((resAll, rejAll) => {
		// for (let i = 0; i < promises.length; i++) {
		// 	promises[i].then(
		// 		(res) => {
		// 			results[i] = res
		// 			count++
		// 			if (count === promises.length) {
		// 				resAll(results)
		// 			}
		// 		},
		// 		(rej) => rejAll(rej)
		// 	)
		// }
		promises.forEach((promise, index) => {
			promise
				.then((res) => {
					results[index] = res
					count++
					if (count === promises.length) resAll(results)
				})
				.catch((err) => rejAll(err))
		})
	})
}

// PromiseAll(promises)
// 	.then((res) => console.log('res:', res))
// 	.catch((rej) => console.log('rej:', rej))

// Method PromiseAllSettled custom
function PromiseAllSettled(promises) {
	const results = []
	let count = 0
	// return new Promise((resAll) => {
	// 	promises.forEach((promise, index) => {
	// 		promise
	// 			.then((res) => {
	// 				results[index] = { status: 'fulfilled', value: res }
	// 				count++
	// 			})
	// 			.catch((err) => {
	// 				results[index] = { status: 'rejected', value: err }
	// 				count++
	// 			})
	// 			.then(() => {
	// 				if (count === promises.length) resAll(results)
	// 			})
	// 	})
	// })
	return PromiseAll(
		promises.map((promise) => {
			return promise
				.then((res) => ({ status: 'fulfilled', value: res }))
				.catch((err) => ({ status: 'rejected', value: err }))
		})
	)
}
// PromiseAllSettled(promises).then((res) => console.log('resAllSettled: ', res))

//Представити число секунд у вигляді hh:mm:ss
const secFull = 9127
// 02:32:07
const seconds = (secFull % 3600) % 60
const minutes = ((secFull % 3600) - seconds) / 60
const hours = (secFull - minutes * 60 - seconds) / 3600

console.log(
	(hours < 10 ? '0' : '') +
		hours +
		':' +
		(minutes < 10 ? '0' : '') +
		minutes +
		':' +
		(seconds < 10 ? '0' : '') +
		seconds
)
