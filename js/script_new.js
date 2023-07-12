const someArr = [17, 32, 45, 40, 35]

// function findHight(array) {
//     let maxIndex = 0;
//     for (let i = 1; i < array.length; i++) {
//         maxIndex = array[i] > array[maxIndex] ? i : maxIndex;
//     }
//     return maxIndex;
// }
// console.log(findHight(arr))

function pikIndex(arr) {
    let left = -1
    let right = arr.length
    while (right - left > 1) {
        let midle = Math.floor((right + left) / 2)

        if (arr[midle] < arr[midle + 1]) {
            left = midle
        } else {
            right = midle
        }
    }
    return left + 1
}
console.log(pikIndex(someArr))

document.addEventListener('click', (e) => {})
