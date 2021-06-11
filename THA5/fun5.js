var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var map = {};
var mostFrequentElement = arr[0];
function fi(){
    for(var i = 0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]]=1;
        }else{
            ++map[arr[i]];
            if(map[arr[i]]>map[mostFrequentElement]){
                mostFrequentElement = arr[i];
            }
        }
    }
    return mostFrequentElement;
}
console.log(fi());