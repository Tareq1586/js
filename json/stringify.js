// converting a js object into json
// const obj = {name: "John", age: 30, city: "New York"}
// console.log(obj)
// const json = JSON.stringify(obj);
// console.log(json);

// array is also an object
// const array = ["John", "Peter", "Sally", "Jane"];
// console.log(array);
// const json = JSON.stringify(array);
// console.log(json);

// date object will be converted into a string
// const obj = {name: "John", today: new Date(), city: "New York"}
// console.log(obj)
// const json = JSON.stringify(obj);
// console.log(json);

// but when parsing a date object into a js object there will be an error
// const jsonString = '{"name": "John", "birth": new Date(1997-12-10), "city": "New York"}';
// const myObj = JSON.parse(jsonString);
// console.log(myObj);