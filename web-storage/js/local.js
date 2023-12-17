function setUser(name, value){
    localStorage.setItem(name, value);
}
function getUser(key){
    alert(localStorage.getItem(key));
}
// this function will remove an item from local storage
function removeUser(key){
    localStorage.removeItem(key);
}
function clearStorage(){
    window.localStorage.clear();
}