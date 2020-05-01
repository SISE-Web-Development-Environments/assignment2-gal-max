
$(function() {
    $("#settings").click(function ()
    {
        setSettings()
    });
});

$(".randomB").click(function()
{
    var upP = 38;
    const bottomP = 40;
    const leftPlayer = 37;
    const rightPlayer = 39;
    const balls = randomInteger(50,90);
    const time = randomInteger(60,250);
    const monsters = randomInteger(1,4);


    setPlayerSettings(upP,bottomP,leftPlayer,rightPlayer,balls,time,monsters);
    $("#gameSetting").hide();
    $(".wrapper").hide();
    $("#showcase").hide();
    Start();
    $(".gameBoard").show();

});



function setSettings() {
    $('#settings').validate({
        // Specify validation rules
        rules: {
            numberBalls:{
                required: true,
                min: 50,
                max: 90,
            },
            timer:{
                required: true,
                min: 60,
            },

            monsters: {
                required: true,
                min: 1,
                max: 4,
            },

        },
        // Specify validation error messages
        messages: {
            numberBalls: "Choose balls number between 50 to 90",
            timer: "The time should be above 60 seconds",
            monsters: "Choose Monsters number between 1 to 3",
        },


        // in the "action" attribute of the form when valid!!!
        submitHandler: function(form) {
            //createNewUser();
            $(".wrapSet").hide();
            $("#gameSetting").hide();
            collectSettings();

        }
    });
}

function collectSettings(){


    var upP = document.getElementById("upB").value;
    const bottomP = document.getElementById("downB").value;
    const leftPlayer = document.getElementById("leftB").value;
    const rightPlayer = document.getElementById("rightB").value;
    const balls = document.getElementById("numberBalls").value;
    const time = document.getElementById("timer").value;
    const monsters = document.getElementById("monsters").value;


    setPlayerSettings(upP,bottomP,leftPlayer,rightPlayer,balls,time,monsters);
    $("#gameSetting").hide();
    $(".wrapper").hide();
    $("#showcase").hide();
    Start();
    $(".gameBoard").show();


}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}