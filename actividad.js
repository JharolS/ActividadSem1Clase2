let user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
rest = { city: "Phoenix", state: "AZ", country: "USA"}
let str= ({ name, email, rest} = user)
console.log(str)