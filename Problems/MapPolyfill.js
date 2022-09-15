


const arr =  [2,3,4];

Array.prototype.myMap = function myFunc(logic){ 
  const arrTransform = [];

  for (let index = 0; index < this.length; index++) {
    arrTransform.push(logic(this[index],index,this))
    
  }
  return arrTransform

}; 

const newArr = arr.myMap(item=>item*2)
console.log(newArr)
