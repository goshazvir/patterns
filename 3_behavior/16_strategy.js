class Venicle {
    travelTime() {
        return this.Venicle
    }
}

class Bus extends Venicle {
    constructor() {
        super()
        this.timeTaken = 10
    }
}

class Taxi extends Venicle {
    constructor() {
        super()
        this.timeTaken = 5
    }
}

class Car extends Venicle {
    constructor() {
        super()
        this.timeTaken = 3
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log( commute.travel(new Taxi()))
console.log( commute.travel(new Bus()))
console.log( commute.travel(new Car()))