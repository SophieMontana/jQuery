$(document).ready(function() {
    $('#submit').on('click', function() {
        let name=$('#name').val();
        let email=$('#email').val();
        let phone =$('#phone').val();
        let message=$('#message').val();
        //console.log(name,email,phone,message)

        //validate form
        $('#form').on('click',function() {
        var required = [name, email, phone, message];
        for (i=0; i< required.length; i++) {
            if (name == " ") {
                $('#name').addClass("warning");
                alert("Please Fill Out All Required Fields");
            }
            if (email == " "){
                $('#email').addClass("warning");
                alert ("Please Fill Out All Required Fields");
            }
            if (phone == " ") {
                $('#phone').addClass("warning");
                alert("Please Fill Out All Required Fields");
            }
            if (message == " ") {
                $('message-area').addClass("warning");
                alert("Please Fill Out All Required Fields");
            } else {
                return true
            };

            if (addClass != "warning") {
                $("h2").text("Thank you for your Feedback!");
                } 
            }
        })
    })
})