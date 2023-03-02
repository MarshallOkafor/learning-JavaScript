// Create a Fiat Car object
var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2, 
    convertible: false,
    mileage: 88000,
    started: false, // Added a new property
    fuel: 0, // Added a new property

    start: function() { // This is a new method
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert('The car is on empty, fill up before starting!')
        }
    },

    stop: function() { // This is a new method
        this.started = false;
    },

    drive: function() { // Modified the drive method
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + ' ' + this.model + ' goes zoom zoom!!');
                this.fuel = this.fuel - 1;
            } else {
                alert('Uh oh, you are out of fuel.');
                this.stop();
            }
        } else {
            alert('You need to start the engine first.');
        }
    },

    addFuel: function(amount) { // This is a new method
        this.fuel = this.fuel + amount;
    }
};

// Call fiat drive method
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();