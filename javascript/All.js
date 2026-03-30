// 1.repeting the letters
function rL(s) {
    let r = "";
    for (let  i= 0; i < s.length; i++) {
        r += s[i];
        r += s[i];
    }
    return r;
}
console.log(rL("Naveen"));

// 2.counting the capital letters
function cC(s1) {
 let c = 0;
 for (let i = 0; i < s1.length; i++) {
    if(s1[i] == s1[i].toUpperCase()) {
        c++;
    }
 }
 return c;
} 
console.log(cC("Naveen Kumar"));

// 3.vowel replacer
function vR(s2, c) {
 let r = "";
 const v = "aeiouAEIOU"
 for (let i = 0; i < s2.length; i++) {
    if(v.includes(s2[i])) {
        r += c;
    } else {
        r += s2[i];
    }
 }
 return r;
} 
console.log(vR("Naveen Kumar", "#"));

// 4.concat first n last letter
function fL(s) {
    let r = "";
   let f = s[0];
   let l = s[s.length - 1];
   r = f + l;
   return r;
}
console.log(fL("Naveen"));

// 5.Finding how many 'a' s present in a string
function fA(s) {
    let c = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] == "a") {
            c++;
        }
    }
    return c;
}
console.log(fA("Naveen"));

// 6.printing the lowercase value in a string
function lV(s) {
    let r = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toLowerCase()) {
            r += s[i];
        }
    }
    return r;
}
console.log(lV("IcANHEaRTHAt"));

// 7.sum of the values
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(10, 20, 30));

// 8.printing the array elements
const f = ["apple", "banana", "mango", "grapes"];
for (let i= 0; i < f.length; i++) {
}
console.log(f, f.length);

// 9. printing length of each element of array
const f1 = ["apple", "banana", "mango", "grapes"];
for (let i = 0; i < f1.length; i++) {
console.log(f1[i].length);
}
 // 10. array elements to uppercase
 const f2 = ["apple", "banana", "mango", "grapes"];
for (let i= 0; i < f2.length; i++) {
console.log(f2[i].toUpperCase());
}

// 11. array element to uppercase without modifying the array
const f3 = ["apple", "banana", "mango", "grapes"];
for (let i= 0; i < f3.length; i++) {
    f3[i] = f3[i].toUpperCase();
}
console.log(f3);

// 12. printing the first and last letter  of the element of array
const f4 = ["apple", "banana", "mango", "grapes"];
for (let i= 0; i < f4.length; i++) {
console.log(f[i][0] + f[i][f[i].length -1]);
}

// 13. Accessing n updating Array
const f5 = ["apple", "banana", "mango", "grapes"];
console.log(f5);
console.log(f5[0]);
console.log(f5[f5.length - 1]);
f5[1] = "sapota";
console.log(f5);

// 14. Push method in array
const num = [];
for (let i = 1; i <= 10; i++) {
    num.push(i);
}
console.log(num);

// 15. finding sum of the array
const num1 = [10, 20, 30, 40];
let sum1 = 0;
for (let i = 0; i < num1.length; i++) {
    sum1 += num1[i];
} 
console.log(sum1);

// 16. unshift() and shift()Array method
const f6 = ["apple", "banana", "mango", "grapes"];
for (let i= 0; i < f6.length; i++) {
console.log(f6[i]);
}
f6.unshift("sapota");
console.log(f6);
f6.shift();
console.log(f6);

// 17. capSmall letters moving
function cS(str) {
    let cL = "";
    let sL = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            cL += str[i];
        } else {
            sL += str[i];
        }
    }
    return cL + sL;
} 
console.log(cS("FaceBook"));

// 18. String concatination
const str = "Naveen";
console.log(`Hey ${str}`);

// 19. count char
function cCh(str, ch) {
    let c = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            c++;
        }
    }
    return c;
}
console.log(cCh("naveen", "n"));

// 20. returning value using filter() method

const arr = [10, 0, -1, '', "dct", null, NaN, []];
const r = arr.filter((ele) => {
    return ele;
});
console.log(r);

// 21 . JackPot problem using every() method
function testJackpot(arr) {
    const r = arr.every((ele) => {
        return arr[0] == ele;
    });
    return r;
}
console.log(testJackpot(["SS", "SS","SS", "Ss"]));
console.log(testJackpot(["SS", "SS","SS", "SS"]));
console.log(testJackpot(["&", "&&","&&&", "&&"]));

// 22. find all even number using filter
function findAllEvens(arr) {
    const result = arr.filter(function(ele) {
        return ele % 2 == 0;
    });
    return result;
}
console.log(findAllEvens([10, 11, 12, 13, 14]));

// 23. findIndex() method 
const a = [10, 20, 30, 40, 50];
const r1 = a.findIndex((n) => {
    return n >= 25;
});
console.log(r1);

// 24. find() method 
const a1 = [10, 20, 30, 40, 50];
const result = a1.find((num) => {
   return num >= 25;
});
console.log(result);

// 25. forEcah() method - ther is no return statement in for each
function sN(prices) {
let sum = 0;
prices.forEach(function(n) {
    sum += n;
});
return sum;
}
console.log(sN([10, 20, 30]));

// 26. Function Expression
const print = function (a, b) {
return a + b;
}
console.log(print(10, 20));

// 27 .Templete literals
const pName = "John";
console.log("Hello, My name is " + pName + " . Nice to meet u");
console.log(`Hello, My name is  ${pName}. Nice to meet u`);

// 28. map() method
function namesUpperMap(strArr) {
    const result = strArr.map((ele) => {
        return ele.toUpperCase();
    });
    return result;
}
console.log(namesUpperMap(["ravi", "aditya", "kavi"]));

// 29. camel Casing
myName = "Maha";
console.log(myName);
myCity = "Bangalore";
console.log(myCity);
myAge = 23;
console.log(myAge);

// 30. name uppercase using forEach() method
function nU(arr) {
    const r = [];
    arr.forEach((ele) => {
        r.push(ele.toUpperCase());
    });
    return r;
} 
console.log(nU(["ravi", "aditya", "kavi"]));

// 31. printing only consonants
const s = "javascript";
let res = "";
const sstr = "aeiou";
for (let i = 0; i < s.length; i++) {
    if (!sstr.includes(s[i])) {
        res = res + s[i];
    }
    // if (sstr.includes(str.charAt(i))) {
        //continue; }
        // else {                                                              
        //res = res + str.charAt(i); }
}
console.log(res);

// 32. only vowels
const str1 = "javascript";
let res1 = "";
const sstr1 = "aeiou";
for (let i = 0; i < str1.length; i++) {
    if (sstr1.includes(str1[i])) {
        res1 = res1 + str1[i];
    }
}
console.log(res1);

// 33. Plus and Minus count
const str2 = "++-+-++0";
let pCount = 0;
let mCount = 0;
for (let i = 0; i < str2.length; i++) {
    if (str2[i] == "+") {
        pCount++;
    }
    else if (str2[i] == "-") {
        mCount++;                   
    }
    }
console.log(`There are ${pCount} pluses and ${mCount} minuses`);

// 34 . reversing the array
const str3 = "dct";
let res3 = "";
for (let i = str3.length - 1; i >= 0 ; i--) {
   // console.log(str[i]);
   res3 += str3[i];
}
console.log(res3);

// 35. some() method
const numbers = [1, 2, 3, 4, 5];
const result5= numbers.some((num) => {
    return num > 4;
});
console.log(result5);

// 36. every() method
const numbers1 = [2, 4, 6];
const result1 = numbers1.every((num1) => {
    return num1 % 2 == 0;
});
console.log(result1);

// 37. printing string using for loop
const str4 = "react";
for(let i = 0; i < str4.length; i++) {
    console.log(str4[i]);
}
console.log(str4);

// 38. vowel count
const str6 = "javascript";
const vowels = "aeiou";
let vowelCount = 0;
for (let i = 0; i < str6.length; i++) {
    if (vowels.includes(str6[i])) {
        vowelCount++;
    }
}
console.log(vowelCount);

// 39. Greeting message
function greet(name) {
    const msg = `Hello ${name}!`;
    return msg;
};
console.log(greet("Adam"));
console.log(greet("Maha"));

// 40. reduce() method
const arr10 = [10, 20, 30, 40];
function sumArray(arr10) {
    let total = arr10.reduce(function(acc, ele) {
        return acc + ele;
    });
    return total;
}
console.log(sumArray(arr10));


