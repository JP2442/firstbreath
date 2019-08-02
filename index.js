var inputField = $("input");
var addButton = $("button");
var container = $(".container")
var listItems = JSON.parse(localStorage.getItem("key")) || [];

addButton.on("click", addItem);
refresh();

function addItem(){
  userText = inputField.val();
  container.append(`<p>${userText}</p>`)
  listItems.push(userText);
  var stringifiedListItems = JSON.stringify(listItems);

  localStorage.setItem("key", stringifiedListItems);
}

function refresh(){
  for (var i = 0; i < listItems.length; i++){
    container.append(`<p>${listItems[i]}</p>`)
  }
}
