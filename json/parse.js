// introduction to json
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// console.log(jsonString);
// // covert json string to valid javascript object
// const myObj = JSON.parse(jsonString);
// console.log(myObj);

// we can not use undefined
// const jsonString = '{"name": "John", "age": 30, "city": undefined}';
// const myObj = JSON.parse(jsonString);
// console.log(myObj);

// array also can be used as a json data
// const text = '["Computer Programming", "Medical Science", "Religion"]';
// const myArray = JSON.parse(text);
// console.log(myArray);

// we can not use date object in json
// const jsonString = '{"name": "John", "birth": new Date(1997-12-10), "city": "New York"}';
// const myObj = JSON.parse(jsonString);
// console.log(myObj);

// date can be stored as string and then converted to data using new Date constructor
// const jsonString = '{"name": "John", "birth": "1997-12-10", "city": "New York"}';
// const myObj = JSON.parse(jsonString);
// console.log(new Date(myObj.birth));

// using a callback as a second parameter
// this callback will iterate through every property
// reviver function
// const jsonString = '{"name": "John", "birth": "1997-12-10", "city": "New York"}';
// const myObj = JSON.parse(jsonString, function(key, value){
//     if(key){
//         console.log(`${key} - ${value}`);
//     }
// });

// reviver can filter the value
// const jsonString = '{"name": "John", "birth": "1997-12-10", "city": "New York"}';
// const myObj = JSON.parse(jsonString, function(key, value){
//     if(key === "birth"){
//         return new Date(value);
//     }
//     return value;
// });
// console.log(myObj.birth);



