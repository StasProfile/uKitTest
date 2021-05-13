const vechile = {
    color: String,
    cost: Number, 
    hp: Number,
}

const car = {
    __proto__: vechile,
    gearBox: String
}

car.cost = 3000000;
console.log(car.cost);