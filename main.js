var toppings=["cheese","hawaian","peperoni","egg-shape(easter special)"]

function getmenu(){
    var htmldata
    htmldata="<ol class='menulist'>";
    toppings.sort();
    for(var i=0;i<toppings.length;i++){
        htmldata=htmldata+'<li>'+toppings[i] +'</li>'
    }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata=""
    var item=document.getElementById("add_item").value;
    toppings.push(item);
    toppings.sort();
    htmldata="<section class='cards'>";
    for(var i=0;i<toppings.length;i++){
        htmldata=htmldata +'<div class="card">'+'<img src="images/pizzaImg.png"/>' +  toppings[i] +'</div>'
    }
    htmldata=htmldata + "</section>";
    document.getElementById("display_added_menu").innerHTML=htmldata;
}