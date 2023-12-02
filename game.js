// Vehicle Constructor
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
  }
  
  // Adding common methods using prototype
  Vehicle.prototype.accelerate = function(increment) {
    this.speed += increment || 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.brake = function(decrement) {
    this.speed -= decrement || 10;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car Constructor inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking.`);
  };
  
  // Airplane Constructor inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
  }
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  
  // Creating instances of Car and Airplane
  const myCar = new Car('Toyota', 'Corolla', 0, 'Petrol', 4);
  const myAirplane = new Airplane('Boeing', '747', 0, 'Jet Fuel', 4, true);
  
  // Test the methods
  myCar.accelerate(); // Output: Toyota Corolla is accelerating. Current speed: 10 mph
  myCar.brake(5); // Output: Toyota Corolla is braking. Current speed: 5 mph
  myCar.refuel(); // Output: Toyota Corolla is refueling.
  myCar.honk(); // Output: Toyota Corolla is honking.
  
  myAirplane.accelerate(); // Output: Boeing 747 is accelerating. Current speed: 10 mph
  myAirplane.brake(5); // Output: Boeing 747 is braking. Current speed: 5 mph
  myAirplane.refuel(); // Output: Boeing 747 is refueling.
  myAirplane.takeOff(); // Output: Boeing 747 is taking off.
  