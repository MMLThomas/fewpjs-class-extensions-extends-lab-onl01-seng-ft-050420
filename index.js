// Your code here
class Polygon{
  
  constructor(arr){
    this.arr = arr;
  }
  
  get countSides(){
    return this.arr.length;
  }
  
  get perimeter(){
    return this.arr.reduce((e,total) => e + total);
  }
  
}

class Triangle extends Polygon{
  get isValid(){
    this.arr[0] + this.arr[1] > this.arr[2] && this.arr[2] + this.arr[1] > this.arr[0]
  }
  
}