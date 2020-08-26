// Your code here
class Polygon{
  
  constructor(arr){
    this.arr = arr
  }
  
  get countSides(){
    return this.arr.reduce((total, e) => 1 + total);
  }
  
}

