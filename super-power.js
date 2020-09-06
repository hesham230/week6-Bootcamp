// const storm = {  
//   // add code here
//   weather: "sunny",
//   superPower : "flying",
//   printSuperPower
// };


// function printSuperPower() {
  //   console.log("my superpower is " + this.superPower);
  // };

//  storm.printSuperPower();
  



const book = {
  title = "hi",
  author = "hesham"
};

function summary(){
  console.log(`${this.title} was written by ${this.author}`);
}

summary.call(book);

summary.apply(book);

