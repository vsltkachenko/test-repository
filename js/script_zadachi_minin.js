



function isUnique(string) {

    // console.log([...new Set(str)].length === str.length)

    for (let i = 0; i < string.length; i++) {

        const char = string[i]
        if (string.lastIndexOf(char) !== i) {
            return false
        }
    }
    return true
}



console.log(isUnique('adFhevkF'))