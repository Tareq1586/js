function loadData() {
    const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     document.getElementById('demo').innerHTML = this.responseText;
    // };
    xhr.open('GET', 'text.txt', true);
    xhr.setRequestHeader('gf', 'js');
    xhr.send();
    console.dir(xhr.onload);
}

// function cFunction1(xr) {
//     document.getElementById('demo').innerHTML = xr.responseText;
// }

// function cFunction2(xr) {
//     document.getElementById('demo1').innerHTML = xr.responseText;
// }