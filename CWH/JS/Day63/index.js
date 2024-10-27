let arr = [1,2,3,4,5,6,7];
console.log(arr);
console.log(arr.length)
console.log(arr[0]);   
arr[0] = 5666;
console.log(arr[0]);
let a = "harry"
a[0] = 'k' //strings are immutable
console.log(a)
console.log(typeof(arr))
console.log(arr.toString())
console.log(arr.join(' and '))
console.log(arr.pop())
arr.push(100)
console.log(arr);
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(1))
console.log(arr)
delete arr[3]
console.log(arr) //it will leave undefined at the place of deleted element
let a1 = [5,2,3,23,32]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3)) //it will not change the original array
console.log(a1)  
a1.sort()
console.log(a1)
a1.splice(1,2) //it will remove 2 elements starting from index 1
console.log(a1)
a1.splice(1,2,100,200) //it will remove 2 elements starting from index 1 and add 100 and 200
console.log(a1)
