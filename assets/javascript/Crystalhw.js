$(document).ready(function () {


    // Generates randomNumber between 19-120
    var randomNumb = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text("Number to match:" + " " + randomNumb);


    // Each trophy needs a number value of between 1-12

    var football = Math.floor(Math.random() * 11 + 1);
    console.log(football);
    var basketball = Math.floor(Math.random() * 11 + 1);
    console.log(basketball);
    var soccer = Math.floor(Math.random() * 11 + 1);
    console.log(soccer);
    var baseball = Math.floor(Math.random() * 11 + 1);
    console.log(baseball);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("winsScore").text("Wins: " + wins);

    $("lossesScore").text("Losses: " + losses);


    // Control for trophy buttons #1-4 from above

    // Trophy1
    $("#football").click(function () {
        userTotal = userTotal + football;
        document.getElementById("userTotal").innerHTML = "Your Number:" + userTotal;
        finishConditions();
        console.log(football, "value of football trophy")
    });

    // Trophy2
    $("#basketball").click(function () {
        userTotal = userTotal + basketball;
        document.getElementById("userTotal").innerHTML = "Your Number:" + userTotal;
        finishConditions();
        console.log(basketball, "value of basketball trophy")

    });

    // Trophy3
    $("#soccer").click(function () {
        userTotal = userTotal + soccer;
        document.getElementById("userTotal").innerHTML = "Your Number:" + userTotal;
        finishConditions();
        console.log(soccer, "value of soccer trophy")
    });

    // Trophy4
    $("#baseball").click(function () {
        userTotal = userTotal + baseball;
        document.getElementById("userTotal").innerHTML = "Your Number:" + userTotal;
        finishConditions();
        console.log(baseball, "value of baseball trophy")
    });


    // Setting up the conditions to finish the game

    function finishConditions() {
        if (userTotal == randomNumb) {
            wins++;
            document.getElementById("wins").innerHTML = "Winner";
            $("#wins").text("Wins" + wins);
            alert("Winner winner chicken dinner")
            reset();
            console.log("ONCE FINISHED", userTotal);

        } else if (userTotal > randomNumb) {
            losses++;
            $("#finishingMessage").text("No soup for you!");
            $("#losses").text("Losses" + losses);
            alert("No soup for you! Try again.");
            reset();

        }

    }

    // Reset Function

    function reset() {
        userTotal = 0;
        $("#userTotal").text("Your Number:" + userTotal);
        randomNumb = Math.floor(Math.random() * 102 + 19);
        $("randomNumber").text(randomNumb);


        football = Math.floor(Math.random() * 12 + 1);
        basketball = Math.floor(Math.random() * 12 + 1);
        soccer = Math.floor(Math.random() * 12 + 1);
        baseball = Math.floor(Math.random() * 12 + 1);
    }


});
