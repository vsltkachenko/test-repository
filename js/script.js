// let str1 = 'listeen';
// let str2 = 'sileent';

function anagrama1(str1, str2) {
    let count = 0

    for (i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
            count++
        }
    }
    console.log(count)
    if (count === str1.length) { console.log(true) } else { console.log(false) }
};

function anagrama2(str1, str2) {
    let result = str1.split('').reduce(function (sum, current) {
        if (str2.split('').includes(current)) return sum + 1
        else return sum

    }, 0);
    if (result === str1.length) { console.log(true) } else { console.log(false) }
    console.log(result)
}
// anagrama2(str1, str2);

let str1 = 'listeeen';
let str2 = 'sileeent';

function makeObj(str) {
    let obj = str.split('').reduce(function (target, key) {

        if (target[key] !== undefined) { target[key] = target[key] + 1 }
        else target[key] = 1
        return target;
    }, {})
    return obj
}

function anagrama3(str1, str2) {
    const obj1 = makeObj(str1)
    const obj2 = makeObj(str2)
    console.log(obj1, obj2)

    for (let prop in obj1) {
        if (!(obj2.hasOwnProperty(prop) && (obj1[prop] === obj2[prop])))
            return false
    }
    return true
}
// console.log(anagrama3(str1, str2));


// ==============  ПАЛІНДРОМ  =========================================

const stroka = 'temet';

function palindrom(str) {
    console.log(Array.from(str).reverse().join(''))
    if (str.split('').reverse().join('') === str) { console.log('Слово - паліндром') }
    else console.log('Слово -  НЕ паліндром')
}
// palindrom(stroka)

// ==============  n-е число Фібоначі  =========================================

function fibo(n) {
    let f = []
    f[1] = f[2] = 1;


    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 2] + f[i - 1]
    }
    return f[n]
}
// console.log(fibo(10))

// ==============  n-е число Фібоначі (рекурсія) =========================================
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// console.log(fib(10))

// =======================================  Пошук найдовшого префіксу  ======================

function getCommonPrefix(prefix, str2) {
    let result = ''
    minLength = Math.min(prefix.length, str2.length)
    for (let i = 0; i < minLength; i++) {
        if (prefix[i] !== str2[i]) {
            break
        }
        result += prefix[i]
    }
    return result
}

function getLongestCommonPrefix(arr) {
    let prefix = arr[0]
    for (let i = 1; i < arr.length; i++) {
        prefix = getCommonPrefix(prefix, arr[i])
    }
    return prefix
}

const arr = ['abcd123', 'abcde123', 'abce123', 'abcdefg123']
// console.log(getLongestCommonPrefix(arr))

// =========================== Реалізація Метода flat() =========================================================

const multiArr = [1, [1, 2, [3, 4]], [2, 4]]; // [1, 1, 2, 3, 4, 2, 4]

const flatArr = (arr) => {
    let result = [];
    arr.forEach((el) => {
        if (Array.isArray(el)) {
            result = [...result, ...flatArr(el)]

        }
        else result.push(el)
    })
    return result
}

const flatArr2 = (arr) => {
    return arr.reduce((acc, el) =>
        acc.concat(Array.isArray(el) ? flatArr2(el) : el), [])
}

// console.log(flatArr(multiArr))
// console.log(flatArr2(multiArr))
// console.log(multiArr.flat(2))
//  =================================   curry  =======================================

// sum(1) //1
// sum(1)(2)(3) // 1 3 6

function sum(number) {
    let innerSum = number;
    console.log(number)


    return function (n) {

        innerSum = innerSum + n;
        console.log(innerSum)
    }
}

function sum() {
    let a = 5
    return function (b) {
        // console.log(a + b);       
    };
}
sum()(3)

// ======================================  Hello world ===============================================

const input = {
    ' ': [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2, 3, 9],
    o: [4, 7],
    r: [8],
    w: [6],
};

const buildString = (obj = {}) => {

    // const res = [];
    // for (let key in obj) {
    //        obj[key].forEach(position => res[position] = key )        
    // }
    // return res.join('')

    return Object.keys(obj).reduce((acc, key) => {
        obj[key].forEach(pos => {
            acc[pos] = key
        })
        return acc
    }, []).join('')
};

// if ({}) { console.log(1) }
// if ([]) { console.log(2) }

const b = Array.from(Array(5), (el, index) => index)
// console.log(b)

// =================================================================================================

const car = ['Honda', 'Toyota', 'Seat', 'Opel', 'VW', 'BMW', 'Audi']

let obj = { ...car }
// console.log(obj)


let carObj = car.reduce((acc, carElement, index) => {
    acc[String(index)] = carElement
    return acc
}, {})
// console.log(carObj)

let carObj2 = {}

for (i = 0; i < car.length; i++) {
    carObj2[String(i)] = car[i]
}
// console.log(carObj2)

const array = [1, 2, 25, 40, 5, 6, 99]
console.log(array)
// const reversed = array.map((e, i, arr) => arr[arr.length - 1 - i])
reversed = array.reduceRight((acc, item) => [...acc, item], [])
console.log(reversed)



car.sort((a, b) => a.localeCompare(b))
// console.log(car)



