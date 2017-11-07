console.log('content script')

document.body.innerHTML += "<img id='add' src='http://www.downloadclipart.net/medium/18122-blue-pin-clip-art.png'style='width: 50px; position:fixed; top:5px; left:5px; z-index:999999'>Some Title />";

var port = chrome.runtime.connect({name: "url-connection"});
//Event listener for click to the button add
document.getElementById('add').addEventListener('click', function () {
  console.log('finally');
  // I want to ask to the background the url of the tab

  // chrome.runtime.sendMessage({message: "url"}, function(response) {
  //   console.log('response', response, 'response farewell', response.farewell);
  // });
  port.postMessage({message: "url"});
  port.onMessage.addListener(function(msg) {
    if (msg.result){
      console.log('OK', msg.result)
      port.postMessage({answer: "Madame"});
      }
  });
})
