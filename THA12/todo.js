function make_cross(){
  var myNodelist = document.getElementsByTagName("LI");
  var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.classList.add('close');
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  // var tick=document.createElement('SPAN');
  // tick.classList.add('tick');
  //  tick.innerHTML='&#10004;';
  // myNodelist[i].appendChild(tick);
}
}
make_cross();
// Click on a close button to hide the current list item
var close = document.querySelectorAll(".close");
var i;
close.forEach((closeit)=>{
  closeit.addEventListener('click',()=>{
    var divi = closeit.parentElement;
    divi.remove();
  })
})

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  make_cross();
}