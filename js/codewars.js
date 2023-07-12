// function encodeRailFenceCipher(str, n) {
// 	const arr = str.split('')
// 	arrLength = arr.length
// 	let chain = []
// 	let i = 0
// 	while (i < arrLength) {
// 		chain.push(arr.splice(0, n))
// 		let part
// 		if (arr.length) {
// 			part = arr.splice(0, n - 2).reverse()
// 			part.push(null)
// 			part.unshift(null)
// 			chain.push(part)
// 		}

// 		i = i + n * 2 - 2
// 	}
// 	// console.log(chain)
// 	let rails = []
// 	let railsStr = ''
// 	for (let line = 0; line < n; line++) {
// 		rails[line] = []
// 		chain.forEach((el) => {
// 			if (el[line]) {
// 				rails[line].push(el[line])
// 			}
// 		})
// 		railsStr += rails[line].join('')
// 	}
// 	// console.log(rails)
// 	return railsStr
// }

// console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4))
//									  WEAREDISCOVEREDFLEEATONCE

// WECRLTEERDSOEEFEAOCAIVDEN

// function decodeRailFenceCipher(str, n) {
// 	let rails = []

// 	let superNum = Math.trunc(str.length / n) - 1
// 	rails[0] = str.slice(0, superNum).split('')
// 	rails[n - 1] = str.substr(-(superNum - 1)).split('')
// 	let start = superNum

// 	for (let i = 0; i < rails[0].length - 1; i++) {
// 		rails[0][i] = rails[0][i] + 0
// 	}
// 	for (let i = 0; i < rails[n - 1].length; i++) {
// 		rails[n - 1][i] = rails[n - 1][i] + 0
// 	}
// 	const plusNull = (arr) => {
// 		return arr
// 			.join('')
// 			.split('')
// 			.map((el) => (el === '0' ? null : el))
// 	}
// 	rails[0] = plusNull(rails[0])
// 	rails[n - 1] = plusNull(rails[n - 1])

// 	for (let line = 1; line < n - 1; line++) {
// 		rails[line] = str.substr(start, (superNum - 1) * 2).split('')
// 		start = start + (superNum - 1) * 2
// 	}
// 	// console.log(rails)

// 	let chains = []

// 	for (let column = 0; column <= (superNum - 1) * 2; column++) {
// 		chains[column] = []
// 		for (let i = 0; i < n; i++) {
// 			chains[column].push(rails[i][column])
// 		}
// 		if (column % 2 !== 0) {
// 			chains[column] = chains[column].reverse()
// 		}
// 	}
// 	return chains.reduce((acc, arr) => {
// 		newArr = arr.filter((el) => el !== undefined && el !== null)
// 		newArrStr = newArr.join('')
// 		acc += newArrStr
// 		return acc
// 	}, '')
// }

// decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)
// console.log(decodeRailFenceCipher('WIREEEDSEEEACAECVDLTNROFO', 4))
// WIREEEDSEEEACAECVDLTNROFO
// decodeRailFenceCipher('WCLEESOFECAIVDENRDEEAOERT', 5)

// function flatten(array) {
// 	let flattend = []
// 	;(function flat(array) {
// 		array.forEach((el) => (Array.isArray(el) ? flat(el) : flattend.push(el)))
// 	})(array)
// 	return flattend
// }
// function flatten(array) {
// 	let res = []
// 	function fl(arr) {
// 		arr.forEach((el) => (Array.isArray(el) ? fl(el) : res.push(el)))
// 	}
// 	fl(array)
// 	return res
// }

// const newArr = flatten([1, 2, 3, [1, 2, 3, 4, [2, 3, 3]]])

// console.log(newArr)

// function removeDupes(str) {
// 	return [...new Set(str.split(''))].join('')
// }

// console.log(removeDupes('abcd'))
// console.log(removeDupes('aabbccdd'))
// console.log(removeDupes('abcddbca'))
// console.log(removeDupes('abbabacdcdcd'))



