var car ={
    nameS: 'Focus 3000',
    model: 1023,
    brand: 'Tesla', 
    year: '10/2/12',
    information: function(){
        console.log('The brand of ' + this.nameS + ' is ' + this.brand);
    },
};

car.information();

console.log(car['name']);

console.log(car.brand);


var person = {
    name: {
        firsName: 'Diego',
        lastName: 'Moreno'
    },
    age: 21,
    vehicle: car.information(),
};


try {
    console.log(person.vehicle);
    
} catch (error) {
    console.log(error)
}