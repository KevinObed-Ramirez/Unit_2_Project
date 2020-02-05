"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Kevin Ramirez
   Date:   2-4-20
   
   Filename: tc_cart.js
	
*/
//Variables declared 
var orderTotal = 0;
//this variable inserts html
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for(var i = 0; i < item.length; i++){
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>" ;
   cartHTML += "<td>" + itemQty + "</td>";
var itemCost = itemPrice[i] * itemQty[i];

cartHTML += "<td> $" + itemCost + "</td></tr>";
orderTotal += itemCost;

} 
//The text is expanded 
cartHTML +="<tr><td colspan='4'>SubTotal</td><td> $ "+ orderTotal + "</td></tr></table>";
//inserted into the html
document.getElementById("cart").innerHTML = cartHTML;