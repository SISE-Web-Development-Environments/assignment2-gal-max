
$(document).ready(function (e) {


});


function openWeb() {
    $(".wrapper").hide();
    $(".login").hide();
    $(".logOutButton").hide();
    $(".gameBoard").hide();
    $(".startButton").hide();

}

function initiateSystem(){
    const userName = "p";
    const password = "p";
    const firstName = "p";
    const lastName = "p";
    const email ="p";
    const date ="p"
    let list = [password, firstName, lastName, email, date];
    keyUser[userName] = list;
}

