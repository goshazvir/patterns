class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} имеет заработную плату ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Make programm'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Make testing'
    }
}

const dev = new Developer('Gosha', 100000)
console.log( dev.getPaid() )
console.log( dev.work() )

const tester = new Developer('Vika', 90000)
console.log( tester.getPaid() )
console.log( tester.work() )