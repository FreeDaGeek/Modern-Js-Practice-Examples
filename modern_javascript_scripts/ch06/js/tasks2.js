// tasks.js #2
// This script manages a to-do list.


var tasks = [];

function addTask(){
    'use strict';
  var task = document.getElementById('task'); //the area where user enters info
  var output = document.getElementById('output');// area where the output will be displayed
  var message = ''; //empty string to output the message to the user

    if(task.value){
        tasks[tasks.length] = task;

    message = 'You have ' + tasks.length+ ' task(s) in your to-do list.';

        if(output.textContent !== undefined){
            output.textContent = message;

        }else{
            output.innerText = message;
        }
    }
    return false;

}

//adding an event listener

function init(){
    'use strict';

    document.getElementById('theForm').onsubmit = addTask;
}

window.onload = init; //the function will not work automaticlly but instead once the user submits a form

