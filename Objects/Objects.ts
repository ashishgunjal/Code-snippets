var object1 = {}
console.log(object1)

const object2 = new Object();
object2.name = "Ashish"
object2.address = "Pune"
console.log(object2)

const orgObject = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }
var object3 = Object.assign({}, orgObject, carObject)
console.log(object3)

const orgObject4 = { company: 'ABC Corp' };
const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });
console.log(orgObject4)
