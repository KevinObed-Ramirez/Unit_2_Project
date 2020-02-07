"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Kevin Ramirez
   Date:   2-6-20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// The votes are being counted
var reportHTML = "<h1>" + raceTitle + "</h1>";
for(var i = 0; i < race.length; i++){
   var totalVotes = 0;
   votes[i].forEach(calcSum);
   reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>" + candidateRows(i, totalVotes) + "</table>";
}
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
//Writes individual table rows for each candidate
 function candidateRows(raceNum, totalVotes){
   var rowHTML = "";
//For loop for steps 
for(var j=0; j < 3; j++){
   var candidateName = candidate[raceNum][j];
   var candidateParty = party[raceNum][j];
   var candidateVotes = votes[raceNum][j];
   var candidatePercent = calcPercent(candidateVotes, totalVotes);
   rowHTML += "<tr><td>" + candidateName + "(" +candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";
   //Another for loop 
   for(var k = 0; k< candidatePercent; k++){
      rowHTML += createBar(candidateParty, candidatePercent);
   }
   rowHTML += "</tr>";
   }
   return rowHTML;
}
//Bars to display the graph
function createBar(partyType){
   var barHTML = "";
   if(partyType === "D"){
      barHTML = "<td class='dem'></td>";
   }
   if(partyType === "R"){
      barHTML = "<td class='rep'></td>";
   }
   if(partyType === "I"){
      barHTML = "<td class='ind'></td>";
   }
   return barHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

