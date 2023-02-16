// Function declaration with two paramters
function dog_bark(name, weight) {
    
    if (weight > 20) {
        console.log(name + ' says WOOF! WOOF!!');
    } else {
        console.log(name + ' says woof! woof!');
    }
    
}

// Function calls to dog_bark()
dog_bark('Spot', 13);
dog_bark('Spike', 53);
dog_bark('Lady', 17);
dog_bark('Rover', -1);