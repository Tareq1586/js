function setUser(name, value){
    localStorage.setItem(name, value);
}
function getUser(key){
    alert(localStorage.getItem(key));
}
function clearStorage(){
    window.localStorage.clear();
}