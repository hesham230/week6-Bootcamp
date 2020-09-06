const person = {
  name:'hesham',
  print: function(){
    return this.name;
  },
  printAfterSecond: function(){
    setTimeout(function(){
      console.log(`${this.name}`)
    }.bind(this),1000);
  }
};

const person1 = person.print();
const person2 = person.printAfterSecond();

console.log(person1);
console.log(person2);