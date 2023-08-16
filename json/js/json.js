// const person = '{"name":"Tareq","age":28,"skills":["programming","executive"]}';
const person = {
    name: "Tareq",
    age: 28,
    skills: [
      "programming",
      "executive"
    ],
    book: {
        name: "Ekhono likhi nay"
    },
    alive: true,
    diseases: null,
    birthday: new Date(),
    money: undefined

  }

console.log(JSON.stringify(person));