function setUser(key, value){
    sessionStorage.setItem(key, value);
}
function getUser(key){
    alert(sessionStorage.getItem(key));
}
function removeUser(key){
    sessionStorage.removeItem(key);
}
function clearStorage(){
    sessionStorage.clear();
}