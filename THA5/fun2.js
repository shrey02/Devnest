function array_clone(x){
    return x.slice(0);
}
console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));