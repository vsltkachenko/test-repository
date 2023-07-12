// function getCapitals(string) {
// 	let result = []
// 	const A = 'A'.codePointAt(0)
// 	const Z = 'Z'.codePointAt(0)
// 	string.split('').forEach((char) => {
// 		const code = char.codePointAt(0)
// 		if (code >= A && code <= Z) result.push(char)
// 	})
// 	return result
// }

// console.log(getCapitals('Mate Academy'))
// console.log(getCapitals('MatE AcadEmy'))
// console.log(getCapitals('mate academy'))

// function getLastDigit(number) {
// 	console.log(+Array.from(String(number)).pop())
// }

// getLastDigit(1)
// getLastDigit(145)
// getLastDigit(5267723)
// getLastDigit(-1)
// getLastDigit(-1.2454)

// function getLastCharacter(string) {
// 	return Array.from(string).pop()
// }

// getLastCharacter('abc')
// getLastCharacter('number 13')
// getLastCharacter('#$@!')

// const populations = []

// function calculateAverageCountryPopulation(populations) {
// 	if (populations.length === 0) return 0

// 	return (
// 		populations.reduce((sum, current) => sum + current, 0) / populations.length
// 	)
// }

// console.log(calculateAverageCountryPopulation(populations))

// function getSumOfRange(start, end) {
// 	let sum = 0
// 	for (let i = start; i <= end; i++) {
// 		sum = sum + i
// 	}
// 	return sum
// }

// console.log(getSumOfRange(-10, -1))
// console.log(getSumOfRange(-5, 5))
// console.log(getSumOfRange(1, 500))

// function getLongestString(strings) {
// 	let long = strings[0]
// 	strings.forEach((str) => {
// 		if (str.length > long.length) long = str
// 	})
// 	return long
// }

// console.log(getLongestString(['One', 'two', 'three', 'four']))
// console.log(getLongestString(['One', 'two', 'six']))
