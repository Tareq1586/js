// console.log(document.getElementById("demo").innerHTML = "Hello");
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");
// const x = document.forms['frm1'];
// let text = '';
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + '<br>';
// }
// document.getElementById('temp').innerHTML = text;
// document.getElementById('myImage').src = 'kb.jpg';
// function validateForm(){
//     const form = document.forms['myForm'];
//     const value = form['fname'].value;
//     if(value ===''){
//         alert('Firstname can\'t be empty');
//         return false;
//     }
// }
// function styling() {
//     const p = document.querySelector("#demo");
//     p.style.fontSize = "30px";
//     p.style.color = "red";
// }
// function myMove() {
//     const elem = document.getElementById('animate');
//     let pos = 0;

//     const interval = setInterval(frame, 5);

//     function frame() {
//         if (pos < 350) {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         } else {
//             clearInterval(interval);
//         }

//     }
// }
// myMove();
// function changeText(id){
//     id.innerHTML = 'Hello world!!';
// }
// const btn = document.querySelector('#btn');
// btn.onclick = function () {
//     console.log('Hello world');
// }
// function hello(msg){
//     console.log(msg);
// }
// const btn = document.getElementById("btn");
// btn.addEventListener('click', function(){
//     hello('Hello boy!');
// });
// const p = document.getElementById('demo');
// const para = document.createElement('p');
// const node = document.createTextNode('Hello world!');
// para.appendChild(node);

// const div = document.getElementById('div1');
// const p1 = document.getElementById('p1');
// div.insertBefore(para, p1);
// const tags = document.querySelectorAll('.para');
// console.log(tags[0]);
// const nodeList = document.querySelectorAll('.para');
// const htmlCollection = document.getElementsByClassName('para');

// console.dir(nodeList[0]);
// console.dir(htmlCollection['p2']);

// const width = document.getElementById('width');
// const height = document.getElementById('height');
// width.innerHTML = window.innerWidth;
// height.innerHTML = window.innerHeight;
// let myWindow;
// function openWindow(){
//     myWindow = window.open('https://www.google.com/', '_self');
// }
// function closeWindow(){
//     myWindow.close();
// }
// const href = document.getElementById('href');
// const hostName = document.getElementById('hostName');
// const pathName = document.getElementById('pathName');
// const protocol = document.getElementById('protocol');
// const port = document.getElementById('port');



// href.innerHTML = 'The location is: ' + window.location.href;
// hostName.innerHTML = 'The hostname is: ' + window.location.hostname;
// pathName.innerHTML = 'Page path is: ' + window.location.pathname;
// protocol.innerHTML = 'Page protocol is: ' + window.location.protocol;
// port.innerHTML = 'Page port is: ' + window.location.port;
// function newDoc(){
//     window.location.assign('https://www.w3schools.com/');
// }
// function goBack() {
//     window.history.back();
// }

// function goForward() {
//     window.history.forward();
// }
// const confirm = document.getElementById('confirm');
// const prompt = document.getElementById('prompt');
// function showAlert(){
//     window.alert('Hello world!');
// }
// function showConfirm(){
//     let txt;
//     if(window.confirm('Press a button!')){
//         txt = 'You pressed ok!';
//     }else{
//         txt = 'You pressed cancel!';
//     }
//     confirm.innerHTML = txt;
// }
// function showPrompt(){
//     let person = window.prompt("Enter your name", "Tareq");
//     let txt;
//     if(person == null || person == ''){
//         txt = 'You canceled the  prompt';
//     }else{
//         txt = 'Hello ' + person;
//     }
//     prompt.innerHTML = txt;
// }
// const timeout = document.getElementById('timeout');
// const interval = document.getElementById('interval');
// let timeoutInstance;
// let intervalInstance;

// function startTimeout() {
//     timeoutInstance = setTimeout(function () {
//         timeout.innerHTML = '3 Second passed!';
//     }, 3000);
// }

// function stopTimeout() {
//     clearTimeout(timeoutInstance);
// }

// function startInterval() {
//     intervalInstance = setInterval(function () {
//         interval.innerHTML = new Date().toLocaleTimeString();
//     }, 1000);
// }

// function stopInterval() {
//     clearInterval(intervalInstance);
// }
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setDate(d.getDate() + exdays * 24 * 60 * 60);
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + '=' + cvalue + ';' + expires + ";path=/";
// }
//user=Tareq Munawar; username=Taufiq
// function getCookie(cname) {
//     const ca = document.cookie.split(';');
//     let name = cname + "=";


//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];

//         while (c.charAt(0) === " ") {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length);
//         }
//     }
//     return "";

// }
// function validation() {
//     inputObj = document.getElementById('id1');
//     if (inputObj.validity.rangeUnderFlow) {
//         inputObj.setCustomValidity("Value is too low");
//     } else if (inputObj.validity.valueMissing) {
//         inputObj.setCustomValidity('Value missing!');
//     }
//     if (!inputObj.checkValidity()) {
//         document.getElementById('demo').innerHTML = inputObj.validationMessage;
//     }
// }
// function back() {
//     window.history.back();
// }

// function forward() {
//     window.history.forward()
// }

// function backTo(n) {
//     window.history.go(n);
// }

// function getHistory() {
//     alert(window.history.length);
// }
let w;
function startWorker(){
    if (typeof Worker !== 'undefined') {
        //worker available
        if (typeof w == 'undefined') {
            w = new Worker('./js/worker.js');
        }
        w.onmessage = function (event) {
            document.getElementById('demo').innerHTML = event.data;
        };
    
    } else {
        alert('Your browser doesn\'t support web worker');
    }
}
function stopWorker(){
    if( typeof Worker !== 'undefined'){
        w.terminate();
        w = undefined;
    }else{
        alert('This browser does\'t support worker');
    }
}