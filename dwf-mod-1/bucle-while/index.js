
const max = 1000;
const min = 0; 
var arr = []
i = 0 

// while (i <= 130){
//     var numb = Math.floor(Math.random() * (max - min) + min);
//     arr[i] = numb
//     i ++;
// };

// console.table(arr);

while (i < 130) {
  arr.push(
    Math.floor(Math.random() * max - min + min)
  )
  i ++;
}
console.table(arr);
console.table(arr.length);