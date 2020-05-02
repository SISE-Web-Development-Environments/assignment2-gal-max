
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
    stopGame();
    Start();
    initiated = true;

});

$(".logOutButton").click(function ()
{
    stopGame();
    $("#gameSetting").hide();
    $(".gameBoard").hide();
    $(".wrapper").hide();
    $("#showcase").show()
    $(".startButton").hide();
    $(".RegisterButton").show();
    $(".loginButton").show();
    $(".logOutButton").hide();
    $("#gameSetting").hide();
    initiated = true;

});


$(".startButton").click(function ()
{
    $("#gameSetting").show();
    $(".wrapper").hide();
    $("#showcase").hide()
    $(".register").hide();
    $(".login").hide();
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
    stopGame();
    $("#gameSetting").hide();
    $(".gameBoard").hide();
    $(".wrapper").hide();
    $("#showcase").show();
    initiated = true;

});


