// employee.js
// This script creates an object using form data.

// Function called when the form is submitted.
// Function creates a new object.
    function process(){
        'use strict';

        // Get form references:
          var firstName = document.getElementById('firstName').value;
          var lastName = document.getElementById('lastName').value;
          var department = document.getElementById('department').value;

        // Reference to where the output goes:
          var output = document.getElementById('output');

        // Create a new object:
          var employee = {
              firstName: firstName,
              lastName: lastName,
              department: department,
              hireDate: new Date()
          };


// Create the output as HTML:

        var message = '<h2>Employee Added</h2>' +
            employee.lastName + ' , ' + employee.firstName + '<br>';
        message += 'Department: ' + employee.department + '<br>';
        message += 'Hire Date: ' + employee.hireDate.toDateString();

// Display the employee object:
    output.innerHTML = message;
        
// Return false:
    return false;
    }

    function init(){

    document.getElementById('theForm').onsubmit = process;
    }

// End of process() function.
    window.onload = init;

// Initial setup:


// End of init() function.




