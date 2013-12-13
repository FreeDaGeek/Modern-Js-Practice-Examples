//demo



function init(){
    'use strict';

    var today = new Date(); //today var = Date method
    var message = 'Right now it is' + today.toLocaleDateString(); // message var with today attached with a method to show the local date/time
        message += ' at ' + today.getHours() + ':' + today.getMinutes(); //since the previous method displays the second we can ask for specifics with in the message var
    var output = document.getElementById('output'); //created a var that selects the html element to later use to display local time and date

    if(output.textContent !==undefined){ //IF statement (if the output (with the text content method)is undefined show the message w/ that same text Content method
        output.textContent = message;
    }else{
        output.innerText = message; // if not show the message w/ innerContent method
    }
}

init(); // calling the function above
