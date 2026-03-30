    //returning even numbers
    const arr = [1, 2, 3, 4, 5];
    for (let ele of arr) {
        if (ele % 2 == 0) {
    console.log(ele);
        }
    }

    //returning odd numbers
    const arr1 = [1, 2, 3, 4, 5];
    for (let ele1 of arr1) {
        if (ele1 % 2 != 0) {
    console.log(ele1);
        }
    }

    // find largest number in the array
    const arr2 = [1, 2, 3, 4, 5];
    let maxArr = 0;
    for (let i = 0; i < arr2.length; i++) {
        maxArr = arr[0];
        if (arr[0] <= arr2[i]) {
            maxArr = arr2[i];
        }
    }
    console.log(maxArr);

    // find largest number in the array
    const arr3 = [1, 2, 3, 4, 5];
    let minArr = 0;
    for (let i = 0; i < arr3.length; i++) {
        minArr = arr3[0];
        if (arr3[0] >= arr3[i]) {
            minArr = arr3[i];
        }
    }
    console.log(minArr);

    // sum of all the elements
    const arr4 = [1, 2, 3, 4, 5];
    let res = 0;
    for (let ele4 of arr4) {
        res += ele4;
        }
    console.log(res);

    // average of all

    const arr5 = [1, 2, 3, 4, 5];
    let sum = 0;
    let avg = 0;
    for (let ele5 of arr5) {
        sum += ele5;
        avg = sum / arr5.length;
        }
    console.log(avg);

// remove duplicate elements
const arr6 = [1, 2, 4, 4, 2, 5];
let unique = [];

for (let ele of arr6) {
    if (!unique.includes(ele)) {
        unique.push(ele);
    }
}

console.log(unique);

// reverse an array
const arr7 = [1, 2, 3, 4, 5];
    let r = [];
    for (let i = arr7.length - 1; i >= 0; i--) {
        r.push(arr7[i]);
    }
    console.log(r);

    // maximum frequency
function mF(str) {
        let res = {};
        for (let ch of str) {
            if (ch in res) {
                res[ch]++;
            } else {
                res[ch] = 1;
            }
        }
        let max = 0;
        let maxChar = "";
        for (let key in res) {
            if (res[key] > max) {
               max = res[key];
               maxChar = key;
            }
        }
        return maxChar;
}
console.log(mF("aabbcccdd"));


// minimum frequency
function minF(str) {
let res = {};
for (let ch of str) {
    if (ch in res) {
        res[ch]++;
    } else {
        res[ch] = 1;
    }
}
let min = str.length;
let minChar = "";
for (let key in res) {
   if(res[key] < min) {
     min = res[key];
     minChar = key;
   }
}
return minChar;
}
console.log(minF("abbcccdd"));


// first non repeating char
function fNR(str) {
        let res = {};
        for (let ch of str) {
            if (ch in res) {
                res[ch]++;
            } else {
                res[ch] = 1;
            }
        }
        for (let ch of str) {
            if (res[ch] === 1) {
               return ch;
            }
        }
}
console.log(fNR("aabcccdde"));

// last non repeating char
function lNR(str) {
        let res = {};
        for (let ch of str) {
            if (ch in res) {
                res[ch]++;
            } else {
                res[ch] = 1;
            }
        }
        for (let i = str.length -1; i >= 0; i--) {
            if (res[str[i]] === 1) {
               return str[i];
            }
        }
}
console.log(lNR("aabcccdde"));

// first repeating char
function fNR(str) {
        let res = {};
        for (let ch of str) {
            if (ch in res) {
                res[ch]++;
            } else {
                res[ch] = 1;
            }
        }
        for (let ch of str) {
            if (res[ch] > 1) {
               return ch;
            }
        }
}
console.log(fNR("aabcccdde"));

// last repeating char
function lNR(str) {
        let res = {};
        for (let ch of str) {
            if (ch in res) {
                res[ch]++;
            } else {
                res[ch] = 1;
            }
        }
        for (let i = str.length -1; i >= 0; i--) {
            if (res[str[i]] > 1) {
               return str[i];
            }
        }
}
console.log(lNR("aabcccdde"));

// sorting string according to the frequency

// second largest
const arr8 = [10, 5, 8, 20, 15];
let l = 0;
let s = 0;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > l) {
        l = arr8[i];
    } else if (arr8[i] > s && arr8[i] < l) {
        s = arr8[i];
    }
}
console.log(s);

// largest
const arr9 = [4, 7, 2, 9, 1];
let ln = arr9[0];
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] > ln) {
        ln = arr9[i];
}
}
console.log(ln);  

// even numbers
const arr10 = [3, 6, 8, 1, 9, 2];
let rn = [];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 == 0) {
        rn.push(arr10[i]);
}
}
console.log(rn); 

// sum of all
const arr11 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr11.length; i++) {
        sum1 += arr11[i];
}
console.log(sum1); 

// non repeated
const arr12 = [1, 2, 2, 3, 4, 4, 5];
let ra = [];
for (let i = 0; i < arr12.length; i++) {
     if (!ra.includes(arr12[i])) {
         ra.push(arr12[i]);
     }   
}
console.log(ra);

// double of num from arr
const arr13 = [5, 10, 15, 20];
let r1 = [];
for (let i = 0; i < arr13.length; i++) {
           r1.push(arr13[i] * 2);
         
}
console.log(r1);

// smallest
const arr14 = [8, 3, 5, 1, 9];
let sn = [arr14.length - 1];
for (let i = 0; i < arr9.length; i++) {
    if (arr14[i] < sn) {
        sn = arr14[i];
}
}
console.log(sn);  

// second smallest
const arr15 = [8, 3, 5, 1, 9];
let sn1 = Infinity;
let ssn = Infinity;
for (let i = 0; i < arr15.length; i++) {
    if (arr15[i] < sn1) {
        ssn = sn1;
        sn1 = arr15[i];
} else if (arr15[i] < ssn && arr15[i] > sn1) {
    ssn = arr15[i];
}
}
console.log(ssn);

// palindrome
function isPalindrome(str) {
let left = 0;
let right = str.length - 1;
while (left < right) {
    if (str[left] != str[right]) {
        return false;
    }
    left++;
    right--;
}
return true;
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));



