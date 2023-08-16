const get = document.querySelector('#get');
const send = document.querySelector('#send');
get.addEventListener('click', getData);
send.addEventListener('click', sendData);

function getResnponse(method, url, data) {
    const promise = new Promise(function (resolve,reject) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(this.response);
        };
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send(data);
    });
    return promise;
}

function getData() {
    getResnponse('GET', 'https://jsonplaceholder.typicodes.com/todos/1')
        .then(function (data) {
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        });
}

function sendData() {
    getResnponse('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }))
        .then(function (response) {
            console.log(response);
        });
}