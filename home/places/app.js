// we need to recal the items of all the elements in the html
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
// the previous and next button arrows
let thumbnails =document.getElementById('.thumbnail .item');
// these are the ones we gonna animate

// config param the number amount in the slider
let countItem = items.length
// iteem active is the class that been assigned active in the html
let itemActive = 0;
// handle the next button so when the user klick the button 
next.onclick = function(){
    itemActive = itemActive + 1 //change the variable to one
    if (itemActive >= )
}