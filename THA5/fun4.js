function q(x){
    let s=x.join(",");
    return s;
}
function p(x){
    let s = x.join("+");
    return s;
}
console.log('"'+q(["Red", "Green", "White", "Black"])+'"');
console.log('"'+p(["Red", "Green", "White", "Black"])+'"');
console.log('"'+q(["Red", "Green", "White", "Black"])+'"');