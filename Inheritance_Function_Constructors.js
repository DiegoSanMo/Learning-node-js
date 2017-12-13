function Car(name, model, year){
    this.name = name;
    this.model = model;
    this.year = year;
}
Car.prototype.information = function(){
    console.log('This is the new '+ this.name + ' and the model of this car is ' + this.model);
};

var carType = new Car('Ferrari', 14290764, '10/10/10');

carType.information();


var tesla = new Car('Testa pro', 12312123, '08/10/95');
tesla.information();