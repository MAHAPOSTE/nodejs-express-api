const numbers = [11, 12, 13, 14];

function newArray(arr) {
    const result = arr.reduce((acc, ele) => {
        if (ele % 2 === 0) {   
            acc.push(ele);    
        }
        return acc;
    }, []);

    return result;
}

console.log(newArray(numbers));