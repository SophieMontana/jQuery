$(document).ready(function() {
    $('#submit').on('click', function() {
        let name=$('#name').val();
        let email=$('#email').val();
        let phone =$('#phone').val();
        let message=$('#message').val();
        //console.log(name,email,phone,message)

        //validate form
        $('#form').on('click',function() {
        var required = [];
        for (i=0; i< required.length; i++) {
            if (name.length <1 ) {
                $('#name').addClass("warning");
                alert("Please Fill Out All Required Fields");
            }
            if (email.length<1){
                $('#email').addClass("warning");
                alert ("Please Fill Out All Required Fields");
            }
            if (phone.length < 1) {
                $('#phone').addClass("warning");
                alert("Please Fill Out All Required Fields");
            }
            if (message.length <1) {
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