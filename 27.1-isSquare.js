function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function(){
  if(this.a === this.b && this.a === this.c &&
      this.a === this.d && this.c === this.d && 
      this.b === this.c && this.b === this.d){
    return true;
  }else{
    return false;
  }
}

const square1 = new Square(4,4,4,4);
const square2 = new Square(4,3,4,4);
console.log(square1.isSquare());
console.log(square2.isSquare());