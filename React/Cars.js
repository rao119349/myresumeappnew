class Cars {
  constructor(brand, model, origin, year, color) {
    this.brand = brand;
    this.model = model;
    this.origin = origin;
    this.year = year;
    this.color = color;
  }
  displayBasicDetails() {
    console.log(
      `I Own a Car of Brand Name ${this.brand} which is originated in ${this.origin}, the Model i own is ${this.model} & of ${this.color} color, which was manufactured in year: ${this.year}`
    );
  }
}

class CarWithFeaturesAndColor extends Cars {
  constructor(brand, model, origin, year, color, features) {
    super(brand, model, origin, year, color); // Call the parent constructor
    this.features = Array.isArray(features) ? features : [features];
  }

  displayFeatureDetails() {
    super.displayBasicDetails(); // Call the parent method
    console.log(
      `It does have some exciting Features like: ${this.features.join(", ")}`
    );
  }

  callDisplay() {
    this.displayFeatureDetails();
  }
}

const myCarDetails = new CarWithFeaturesAndColor(
  "Tata",
  "Altroz XT",
  "India",
  2023,
  "Arcade Grey",
  ["Automatic Climate Control", "Cruise Control", "Sunroof"]
);

myCarDetails.callDisplay();

class CarWithNoDetails extends Cars {
  constructor() {
    super(); // Call the parent constructor
    // No properties to initialize
  }
  displayDetails() {
    console.log("This car has no details.");
  }
}
const emptyCar = new CarWithNoDetails();
emptyCar.displayDetails(); // Outputs: This car has no details.
