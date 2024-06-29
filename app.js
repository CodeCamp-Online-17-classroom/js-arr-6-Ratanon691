function findIndex(array) {
  let arr = []
  for(i = 0 ; i < array.length ; i++){
   if(array[i] ==`a`){
     arr.push(i)
  }
}
  return arr
}
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]
findIndex(alphabets)
