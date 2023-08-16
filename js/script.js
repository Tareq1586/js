// var head=document.getElementById("head1");
// head.innerHTML="Hello";
// var para=document.getElementsByTagName("p")[0];
// para.innerHTML="new para";
// document.getElementsByTagName("p")[1].innerHTML="Another para";
// document.getElementsByClassName("head")[0].innerHTML="New Heading";
// // document.querySelector("ul li").innerHTML="Hello there!";
// onClick event
// function onButtonClick() {
//     var msg = document.getElementById("para1");
//     msg.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, repellat!";
// }
// var img = document.querySelector("#img");

// function myMessage1() {
//     img.src = "img/product-1.png";
// }

// function myMessage2() {
//     img.src="img/product-2.png";
// }

//dom manipulation
// var heading3 = document.createElement("h1");
// var text=document.createTextNode("This is heading 3");
// heading3.appendChild(text);
// var myDiv=document.getElementById("my-div");
// myDiv.appendChild(heading3);
// var heading2=document.getElementsByTagName("h1")[1];
// myDiv.removeChild(heading2);
// var heading0 = document.createElement("h1");
// var text0=document.createTextNode("This is heading 2");
// heading0.appendChild(text0);
// var heading1=document.getElementsByTagName("h1")[0];
// myDiv.insertBefore(heading0,heading1);

// DOM FORMS
// const x = document.forms["frm1"];
// // console.dir(x);
// // console.log(x.elements);
// var text = "";
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// JS OBJECT
// const person = {
//     fname: " John",
//     lname: " Doe",
//     age: 35
// };
// var text = "";
// for (let x in person) {
//     text += person[x];
// }
// console.log(text);

// Prototype basic:
// let x = new String("This is a string");
// console.dir(x);

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [{
//             name: "Ford",
//             models: ["Fiesta", "Focus", "Mustang"]
//         },
//         {
//             name: "BMW",
//             models: ["320", "X3", "X5"]
//         },
//         {
//             name: "Fiat",
//             models: ["500", "Panda"]
//         }
//     ]
// }
// text = "";
// for (let i in myObj.cars) {
//     text += "<h1>" + myObj.cars[i].name + "</h1>";
//     for (let j in myObj.cars[i].models) {
//         text += myObj.cars[i].models[j] + "<br>";
//     }
// }
// document.getElementById("para").innerHTML=text;

// String basic:
// let str = "Apple, Banana, Kiwi";
// let banana=str.slice(7,13);
// console.log(banana);
// let text1="Hello";
// let text2="World";
// let text3=text1.concat(" ",text2);
// console.log(text3);
// let text="         Hello World!   ";
// console.log(text.trim());
// let text="Hello World";
// console.log(text.charAt(6));
// let text="Hello World";
// console.log(typeof text.charAt(100))
// console.log(typeof text[100]);
// let text="Hello World";
// console.log(text.split(""));

// Immutable
// let var1="Tareq";
// let var2=var1;
// var2="Muna";
// console.log(var1);
// console.log(var2);
// const obj1={
//     name:"Elias",
//     age: 32
// }
// const obj2=obj1;
// obj2.name="Rejaul";
// console.log(obj1);
// console.log(obj2);