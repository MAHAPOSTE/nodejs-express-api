const nums = [];
for (let i = 1; i <= 10; i++) {
    nums.push(i);
}
console.log(nums);
   
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);