class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  isOfAge() {
    const isOfAge = this.age >= 18;
    return isOfAge;
  }

  sayHello() {
    console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
  }

  drink(what) {
    console.log(`Glu glu ${what}`);
  }

  drinkBeer() {
    const drinkIt = () => {
      this.drink("Beer");
    };

    if (this.isOfAge()) {
      drinkIt();
    } else {
      console.log("I am to young for this");
    }
  }
}

const john = new Person("John", "Doe", 42);
const jane = new Person("Jane", "Doe", 38);
const jack = new Person("Jack", "Doe", 15);

console.log(john.isOfAge());
console.log(jane.isOfAge());
console.log(jack.isOfAge());

john.drink("Water");
jack.drinkBeer();
jane.drinkBeer();
