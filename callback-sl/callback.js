function sample(a,b, callbak){
    // we have made an abstruction
    var c = a + b;
    var d = a - b;
    // we give user a callback so that they an implement as their wish 
    var res = callbak(c, d);
    return res;
}
function sum(a, b){
    return a + b;
}
var res = sample(5,6, sum);
console.log(res);

var res1 = sample(5,6, function(a,b){
    return a - b;
});
console.log(res1);