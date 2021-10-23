/*  File Name: app.css
    Student Name: Lea Marie Magbalot
    Student ID: 301145757
    Date: October 1, 2021
*/

// IIFE  -- Immediately Invoked Function Expression

(function() {

    function Start()
    {
        console.log("App Started...");

        let deleteBtn = document.querySelectorAll('.btn-danger');

        for(button of deleteBtn)
        {
            button.addEventListener('click', (event) => {
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/bussiness-contact');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();