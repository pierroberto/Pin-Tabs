//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Google", "gi"), "goooooooooooooogle");
console.log('content script')
//const body = document.body.innerHTML;


document.body.innerHTML += "<h1 id='add' style='background-color:lime; position:fixed; top:0px; z-index:999999'>Some Title</h1>";
document.getElementById('add').addEventListener('click', function () {
  console.log('finally');
})
//document.body.insertBefore("<h1 id='title' style='z-index=100'>Some Title</h1><span>test</span>", dom.document.html.firstChild)
