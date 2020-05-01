let userLogedIn = false;
// $(document).ready(function () {
//
//
//     if(userLogedIn){
//
//     }
//     else {
//         $(".loginButton").show();
//         $(".RegisterButton").show();
//        // $(".startButton").hide();
//
//     }
//
// });

function logIn(){
    const userName = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;
    if(checkUser(userName, password)){
        userLogedIn = true;
        currUser = keyUser[userName];
        $(".wrapper").hide();
        $("#showcase").show()
        $(".startButton").show();
        $(".logOutButton").show();
        $(".RegisterButton").hide();
        $(".loginButton").hide();
        alert("You have been successfully logged in!")

        return;
    }
    else{
        alert("Please try again")
        return;
    }
}

function checkUser(userName, password){
    let userList = keyUser[userName];
    if(userList!=null) {
        let realPass = userList[0];
        if (realPass === password) {
            return true;
        }
        return false;
    }
}