function addItem(){
    const newItem = document.createElement('li');
    newItem.textContent = "Item 4";

    const list = document.getElementById('items');
    list.appendChild(newItem);
}

function removeItem(){
    const itemlist = document.getElementById('items');
    itemlist.removeChild(itemlist.lastElementChild);
}