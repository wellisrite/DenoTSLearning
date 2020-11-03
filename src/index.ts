console.log('hello');

var trueOrFalse: boolean
var quantity: number
var message: string
var doNotKnowYet: undefined
var nothingess: null
var iCanBeAnything: any

var arrayOfStrings: string[]
var productPrices: number[]

var serverResponse: [string, number] = ["testing", 1]

enum DaysOfTheWeek {
    "Monday",
    "Sunday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
}

let x: boolean | number

x = 1231
x = false

interface Pet {
    name: string,
    pet(): string
}

const dog: Pet = {
    name: "Dog",
    pet() { return `${this.name} has been petted` }
}

class Cat implements Pet {
    name = "Cat"

    pet = () => { return `${this.name} has been petted` }
}

console.log(serverResponse)

console.log(dog.pet())

let cat1 = new Cat()
console.log(cat1.pet())