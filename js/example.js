// ADD NEW ITEM TO START AND END OF LIST
const list = document.getElementsByTagName("UL")[0];
list.innerHTML = "<li>broccolini</li>" + list.innerHTML + "<li>olive oil</li>";

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const list_items = list.getElementsByTagName("li");
var list_length = list_items.length;

for (var i = 0; i < list_length; i++){
	var temp = list_items[i];
	temp.className += "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var grocery_header = document.getElementsByTagName("h2")[0];
var list_length_indicator = '<span class="badge">' + list_length + '</span>';
grocery_header.innerHTML = grocery_header.innerHTML + list_length_indicator;
