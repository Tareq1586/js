// json is a type of text format
// jsoon is created on the basis of js object
// parse mane: পুরো জিনিসটাকে নতুন করে ইন্ডিভিজুয়ালি এক্সপ্লেইন করা

// string does not allow new line
// json key and value must be double coated, not anything else
// json evalutes to js object: evalute মানে হওয়া, object হয়
// const person = '{"name":"Tareq","age":28,"skills":["programming","advisor"], "birthday": new Date("04/17/1995")}';
// const obj = JSON.parse(person);
// console.log(obj);

// undefined can not be used as a value of json proerty
// const person = '{"name":"Tareq","age":28,"skills":["programming","advisor"], "money": undefined}';
// const obj = JSON.parse(person);
// console.log(obj);

// stringify would take date object if it is in proper format and make it as a value of property
// but it will ignore undefined
// const person = {
//     name: "Tareq",
//     age: 28,
//     skills: [
//       "programming",
//       "executive"
//     ],
//     book: {
//         name: "Ekhono likhi nay"
//     },
//     alive: true,
//     diseases: null,
//     birthday: new Date("17/04/1995"),
//     money: undefined
//   }
// console.log(JSON.stringify(person));