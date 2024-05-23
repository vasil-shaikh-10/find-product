function getint(id){
    return parseInt(document.getElementById(id).value);
}
function sum(num1,num2,num3,num4,num5){
    return num1+num2+num3+num4+num5;
}
function product(){
    let v1 = getint("v1");
    let v2 = getint("v2");
    let v3 = getint("v3");
    let v4 = getint("v4");
    let v5 = getint("v5");
    let msg =  sum(v1,v2,v3,v4,v5);
    document.getElementById("dis").innerHTML = msg;
}