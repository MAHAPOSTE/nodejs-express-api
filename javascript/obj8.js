function index(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const arr = [];
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
            arr.push(j);
        }
    }
    obj[str[i]] = arr;
}
    return obj;
}
console.log(index("dctddct"));

// using sigle loop o(n)
function strIndex(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const key = str[i];
        if (key in obj) {
            obj[key].push(i);
        } else {
            obj[key] = [i];
        }
    }
    return obj;
}
console.log(index("dctddct"));