// use of apply bind and call using two functions
var coder1={
   platform:'codeforces',
   rating:2050,
   rankng:'expert',
   fullname:function(a,b){
       console.log(this);
       console.log(this.platform);
       console.log(a+b);
   }
}
var coder2={
    platform:'codechef',
   rating:1800,
   rankng:'4 star'
}
function fullname2(a,b){
    console.log(this);
    console.log(this.platform);
    console.log(a+b);
}
coder1.fullname.call(coder2,2,3);
coder1.fullname.apply(coder2,[2,3]);
var out=fullname2.bind(coder2,2,3);
console.log(out);
out();

//some events of javascript

var even = {
    click: () => {
        console.log("On being clicked");
      },
    loaded: () => {
      console.log("Window loaded");
    },
    onblur: () => {
      console.log("When we leave input field");
    },
    onerror: () => {
      console.log("when error occurs on loading an image");
    },
  };

  //application of some of the functions are done in the javascript portion which is applied in the linked project