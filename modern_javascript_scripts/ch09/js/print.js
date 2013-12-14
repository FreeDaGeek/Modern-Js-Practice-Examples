// Script 9.7 - print.js

    window.onload = function(){
        if (typeof window.print == 'function'){
            var printButton = document.createElement('button'); //created a button

          if(printButton.textContent != 'undefined'){
              printButton.textContent = 'Print';
          }else{
              printButton.innerText = 'Print';
          }
        printButton.onclick = function(){
                window.print();
          };
            document.body.insertBefore(printButton, document.getElementById('main'));
        }// end if statement

    };//end of onload function
