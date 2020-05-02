// Wait for the DOM to be ready
let firstRun = true;

$(function() {

    if(firstRun){
        regForm();
        firstRun = false;
    }
});

function regForm() {
    $('#regForm').validate({
        // Specify validation rules
        rules: {

            username: "required",
            firstname:{
                required: true,
                pattern: /^[a-zA-Z]*$/,

            },
            lastname:{
                required: true,
                pattern: /^[a-zA-Z]*$/,

            },

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
                pattern: /[A-Za-z0-9]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)/,
            },
            birthday:{
                required: true,
            },
        },
        // Specify validation error messages
        messages: {
            firstname: {
                required: "Please enter your firstname",
                pattern: "First name should contain only letters"
            },
            lastname: {
                required: "Please enter your lastname",
                pattern: "Last name should contain only letters"

            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                pattern: "Your password must have at least 1 number and 1 char"
            },
            email: "Please enter a valid email address",
            birthday: "Please provide a valid date",
        },


        // in the "action" attribute of the form when valid!!!
        submitHandler: function(form) {
            createNewUser();

        }
    });
}

function createNewUser(){
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("birthday").value;

    let checkUser = keyUser[userName]
    if(checkUser!=null){
        alert("User with username "+userName+" already exists. Please try again.");
        return;
    }

    let userList = [password,firstName,lastName,email,date,userName]
    keyUser[userName] = userList;
    alert("An account has been successfully created.")
    $(".login_li").addClass("active");
    $(".register_li").removeClass("active");
    $(".register").hide();
    $(".login").show();


}











// // Wait for the DOM to be ready
// $(function() {
//     // Initialize form validation on the registration form.
//     // It has the name attribute "registration"
//     $("form[name='registration']").validate({
//         // Specify validation rules
//         rules: {
//             username: {
//                 required: true
//             },
//             password: {
//                 pattern: '(?:\\d+[a-z]|[a-z]+\\d)[a-z\\d]*',
//                 required: true,
//                 minLength: 6
//             },
//             Conpassword: {
//                 pattern: '(?:\\d+[a-z]|[a-z]+\\d)[a-z\\d]*',
//                 required: true,
//                 minLength: 6,
//                 equalTo: "#password"
//             },
//             firstname: {
//                 pattern: '^[a-zA-Z]*$',
//                 required: true
//             },
//             lastname: {
//                 pattern: '^[a-zA-Z]*$',
//                 required: true
//             },
//             email: {
//                 email: true,
//                 required: true,
//             },
//             registrationBirthDay: {
//                 date: true,
//                 required: true,
//             },
//         },
//         messages: {
//             username: {
//                 required: "Please enter your user name",
//             },
//             firstname: {
//                 pattern: "first name should not include numbers"
//             },
//             lastname: {
//                 pattern: "last name should not include numbers"
//             },
//             password: {
//                 required: "Please provide a password",
//                 minLength: "Your password must be at least 6 characters long"
//             },
//             Conpassword: {
//                 equalTo: "Please enter the same password as above",
//             },
//             email: {
//                 email: "Please provide a valid email"
//             }
//
//         },
//         // Make sure the form is submitted to the destination defined
//         // in the "action" attribute of the form when valid
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// });