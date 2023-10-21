var array = [95,34,5,7,96,37,55,56,88]

var someNo = -11
var  someNo2 = -11
var  someNo3 = -11

for(let i = 0 ; i < array.length ; i++){
  
   if(array[i] > someNo){
     someNo2 = someNo
     someNo = array[i]
   }else if(array[i] > someNo2){
     someNo3 = someNo2
     someNo2 = array[i]
   }else if(someNo3 < someNo2){
     someNo3= array[i]
   }

}
  console.log(someNo)// highest
  console.log(someNo2)// second highest
  console.log(someNo3)// third highest
