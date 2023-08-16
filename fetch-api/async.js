async function getData(){
    const ft = await fetch('http://127.0.0.1:5500/fetch-api/data.txt');
    const text = await ft.text();
    document.getElementById('display').innerHTML = text;
}