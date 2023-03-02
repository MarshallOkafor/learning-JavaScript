// Add a drive method to the Fiat car object
var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2, 
    convertible: false,
    mileage: 88000,
    
    drive: function() { // This is a method
        alert('Zoom! Zoom!!');
    }
};

// Call to the drive method
fiat.drive();