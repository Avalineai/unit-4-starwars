$(document).ready(function() {
    $("#enemies").empty();

    var charImageClassArr = [
        {
            img: ".obiwan-image",
            name: "Obi Wan Kenobi"
        },
        {
            img: ".luke-image",
            name: "Luke Skywalker"
        },
        {
            img: ".sidious-image",
            name: "Darth Sidious"
        },
        {
            img: ".maul-image",
            name: "Darth Maul"
        }
    ];
    
    var starWarsChar = $("<img>");
    starWarsChar.addClass("obiwan-image");
    starWarsChar.attr("src", "assets/images/obiwan.jpeg");
    $("#starters").append(starWarsChar);   
    
    var starWarsCharTwo = $('<img>');
    starWarsCharTwo.addClass("luke-image");
    starWarsCharTwo.attr("src", "assets/images/lukeskywalker.jpg");
    $("#starters").append(starWarsCharTwo);  
    
    var starWarsCharThree = $('<img>');
    starWarsCharThree.addClass("sidious-image");
    starWarsCharThree.attr("src", "assets/images/darthsidious.jpeg");
    $("#starters").append(starWarsCharThree);  
    
    var starWarsCharFour = $('<img>');
    starWarsCharFour.addClass("maul-image");
    starWarsCharFour.attr("src", "assets/images/darthmaul2.jpeg");
    $("#starters").append(starWarsCharFour);
    
    for (let i = 0; i < charImageClassArr.length; i++) {
    
    $("#starters").on("click", charImageClassArr[i].img, function () { 
        console.log(charImageClassArr[i].name)
        $(this).appendTo("#yourchar");
        $("#starters").not(this).appendTo("#enemies");
    });

// $("#enemies").on("click", charImageClassArr[i].img, function () {
    //  console.log("attempt " + charImageClassArr[i].name)
    //  $(this).appendTo("#defender");});
    }
    });
    