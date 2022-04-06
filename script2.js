$(document).ready(function() {
    $('#submit').on('click', function() {
        let name=$('#name');
        let email=$('#email');
        let phone =$('#phone');

        //validate form
        var required = [name, email, phone];
        for (let i=0; i< required.length; i++) {
            if (required[i].val() === "") {
                required[i].prev().addClass("warning");
                $("p").html("Please Fill Out All Required Fields").addClass("warning");
            } else if (required[i].val() !== "") {
                required[i].prev().removeClass("warning");
        }};
        
        if (!($("label").hasClass("warning"))) {
            $("form").remove();
            $('h2').html("Thanks for your feedback!!!");
            } 
        })
    })

