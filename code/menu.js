// let users = {
//     userName:"a",
//     password:"a",
//     firstName:"a",
//     lastName:"a",
//     email:"a",
//     birthday:"a"
// };

let keyUser = new Object(); // key = username, value = list of details about the user name.
let initiated = false;


$(document).ready(function (e) {


    if(!initiated) {
        openWeb();
        initiateSystem();
        initiated = true;
    }

    $(".loginButton").click(function ()
    {
        $(".wrapper").show();
        $("#showcase").hide()
        $(".login_li").addClass("active");
        $(".register_li").removeClass("active");
        $(".register").hide();
        $(".login").show();
        $(".gameBoard").hide()
        initiated = true;


    });

    $(".newGame").click(function ()
    {
        Start();
        stopGame();
        initiated = true;

    });

    $(".logOutButton").click(function ()
    {
        $(".wrapper").hide();
        $("#showcase").show()
        $(".startButton").hide();
        $(".RegisterButton").show();
        $(".loginButton").show();
        $(".logOutButton").hide();
        initiated = true;

    });


    $(".startButton").click(function ()
    {
        $(".gameBoard").show();
        $(".wrapper").hide();
        $("#showcase").hide()
        $(".register").hide();
        $(".login").hide();
        Start();
        initiated = true;

    });

    $(".RegisterButton").click(function()
    {
        $(".wrapper").show();
        $("#showcase").hide()
        $(".register_li").addClass("active");
        $(".login_li").removeClass("active");
        $(".login").hide();
        $(".register").show();
        initiated = true;

    });


    $(".register").show();
    $(".register_li").addClass("active");
    $(".login_li").click(function ()
    {
        $(".login_li").addClass("active");
        $(".register_li").removeClass("active");
        $(".register").hide();
        $(".login").show();
        initiated = true;

    });
    $(".register_li").click(function()
    {
        $(".register_li").addClass("active");
        $(".login_li").removeClass("active");
        $(".login").hide();
        $(".register").show();
        initiated = true;

    });


    $(".homeButton").click(function()
    {
        $(".wrapper").hide();
        $("#showcase").show();
        initiated = true;

    });


});

function openWeb() {
    $(".wrapper").hide();
    $(".login").hide();
    $(".logOutButton").hide();
    $(".gameBoard").hide();
    $(".startButton").show();

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