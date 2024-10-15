

// question 1
class Car {
    constructor( brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails() {
      return `Car Details: ${this.brand} ${this.model} ${this.year}`;
  }
  }
  const myCar = new Car("Toyota", "Corolla", 2020);
const myCar2 = new Car("Ford", "Focus", 2021);

console.log(myCar2.getDetails());
    
  // question 2

  class Carfirst {
    #year;
    constructor( brand,model,year){
        this.brand = brand;
        this.model = model;
        this.#year = year;
    }
    getyear() {
      return this.#year;
  }
  }
  const myCar3 = new Carfirst("Toyota", "Corolla", 2020); 
  console.log(myCar3.getyear());

// question 3

class Car {
  #model;   
  
  constructor(brand, model, year) {
      this.brand = brand;
      this.setModel(model);
      this.year = year;
  }    
  getDetails() {
      return `Car: ${this.brand} ${this.getModel()}, Year: ${this.year}`;
  }   
       getModel() {
      return this.#model;
  }   
       setModel(model) {
      if (model.trim() !== "" && typeof model === "string") {
          this.#model = model;
      } else {
          throw new Error("Invalid model name");
      }
  
  }
}
const myCar3 = new Car("Toyota", "Corolla", 2020); 
  const myCar4 = new Car("Ford", "Focus", 2021);
  
console.log(myCar4.getDetails()); 

// question 4

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }   
     getDetails() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
    }
}
    const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.getDetails());

class Car {
    #year;   
     constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.#year = year;
    }   
     getDetails() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.getYear()}`;
    }   
     getYear() {
        return this.#year;
    }
}const car2 = new Car("Honda", "Civic", 2019);
console.log(car2.getDetails());

class Car {
    #model;    
    constructor(brand, model, year) {
        this.brand = brand;
        this.setModel(model);
        this.year = year;
    }  
      getDetails() {
        return `Car: ${this.brand} ${this.getModel()}, Year: ${this.year}`;
    }   
     getModel() {
        return this.#model;
    }   
     setModel(model) {
        if (model && typeof model === "string") {
            this.#model = model;
        } else {
            throw new Error("Invalid model name");
        }
    }
}
const car3 = new Car("Ford", "Mustang", 2021);
console.log(car3.getDetails());
class ElectricCar extends Car {
    constructor(brand, model, year, batteryRange) {
        super(brand, model, year);
        this.batteryRange = batteryRange;
    }  
          getRange() {
        return this.batteryRange;
    }
}
    const electricCar = new ElectricCar("Tesla", "Model S", 2022, 400);
console.log(electricCar.getDetails());
console.log(`Battery Range: ${electricCar.getRange()} miles`);
class ElectricCar extends Car {
    constructor(brand, model, year, batteryRange) {
        super(brand, model, year);
        this.batteryRange = batteryRange;
    }  
          getDetails() {
        return `${super.getDetails()} with a battery range of ${this.batteryRange} miles.`;
    }
}
    const electricCar2 = new ElectricCar("Nissan", "Leaf", 2021, 150);
console.log(electricCar2.getDetails());
