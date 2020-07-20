var list = document.getElementById("list");
var toDoItem = document.getElementById("toDoItem");
function addItem(){
// --------------List--------------------
    var li = document.createElement("li");
    list.appendChild(li);
    li.setAttribute("class", "itemSetting")
    var liText = toDoItem.value;
    liText = document.createTextNode(liText)
    console.log(toDoItem.value);
    li.appendChild(liText);


// ----------------Del Item-------------------
    var delBtn = document.createElement("button");
    var delText =document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","delItem(this)");
    li.appendChild(delBtn);
    
    
    
// ----------------Edit Item
    var editBtn = document.createElement("button");
    var editText =document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "edit(this)");
    li.appendChild(editBtn);

    toDoItem.value = "";


}
function delItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.remove();
}
function edit(e){
    var previousText = e.parentNode.firstChild.nodeValue;
    console.log(e.parentNode.firstChild.nodeValue);
    var inp = prompt("Enter your To-Do",previousText);
    e.parentNode.firstChild.nodeValue = inp;

}





















