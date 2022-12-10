function Submit(){
    let x=document.getElementById('inp').value;
console.log(x)
 let y=document.getElementById('inp').value;
console.log(y)
 let z=document.getElementById('inp').value;
console.log(z)
var first=x.slice(0,1);
var upper=first.toUpperCase();
console.log(first.toUpperCase());


if(x.length<6){
    alert('Name must be at least 6 characters long');
    return false;
}

if(y.length<6){
    alert('Password must be at least 6 characters long');
    return false;
}else if(y.length>10){
    alert('Password must be maximum 10 characters long');
    return false;
}

if ((z.match(/@/g))&&(z.match(/./g))){
    return true;
}else{
    return false
}
