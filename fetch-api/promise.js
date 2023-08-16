const display = document.getElementById('display');

function getData() {
    fetch('http://127.0.0.1:5500/fetch-api/data.txt')
        .then(res => res.text())
        .then(text => {
            display.innerHTML = text;
        });
}