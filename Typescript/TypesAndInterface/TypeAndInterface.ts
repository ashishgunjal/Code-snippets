// https://blog.logrocket.com/types-vs-interfaces-typescript/

// Types use with primitives values such as number, string,boolean also use for unions and touples
// Interface use with Objects

// Primitive
type address = string

var addressString: address = "Pune"
// touple
type team = [lead: string, isDeveloper: boolean] // touple

var array: team = ["John", false]
// Union type
type phoneNo = undefined | null

var phoneNumber: phoneNo = undefined

type state = {
    MH: string
}

type city = {
    Pune: string
}

type countryType = state | city

let country: countryType = { MH: 'Maharashtra' }

// Interface

interface data {
    "information"?: string,
    "isChunk": boolean
}

const dataObj: data = {
    "information": "IT",
    "isChunk": true
}


// Interface supports extend keyword

interface Student extends College {
    name: string,
    phone: number | undefined
}

interface College {
    address: string,
    state: string
}

const studentObj: Student = {
    address: "Pune",
    state: "MH",
    name: "Ashish",
    phone: undefined
}

// With declaration merging, we can define an interface multiple times, 

interface Client {
    name: string;
}

interface Client {
    age: number;
}

const harry: Client = {
    name: 'Harry',
    age: 41
}