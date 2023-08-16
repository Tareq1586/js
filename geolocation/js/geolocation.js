const p = document.getElementById('demo');
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        p.innerHTML = 'Geolocation is not supported by your browser';
    }
}
function showPosition(position){
    p.innerHTML = position.coords.latitude;
}