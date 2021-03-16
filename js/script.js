//question 1

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In Stock");
}

//question 2

for (var i = 15; i <= 25; i++){
    if (i === 17 || i === 20) {
        console.log(i);
    };
};

//question 3

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var ul = document.querySelector(".games");


function gamesRating() {
    for (var i = 0; i < games.length; i++) {
        if (games[i].rating <= 3.5 && games[i].rating != null) {

            var gameRating = games[i].title + ": " + games[i].rating;
            var li = document.createElement("li");
            li.innerHTML = gameRating;
            ul.appendChild(li);
        
        }
    }
};

gamesRating();


//question 4

function whatIDontLike(input) {
    
if (typeof input != "string") {
        console.log("Please send in a string")
} else {
    console.log("I don`t like " + input);
    }
};

whatIDontLike("Monkeys");


//question 5
 
function subtraction(number1, number2) {
    convNumb1 = parseInt(number1);
    convNumb2 = parseInt(number2);
    var subtraction = document.getElementById("subtraction");
        
    if (isNaN(convNumb2) || isNaN(convNumb1)) {
        var result = "Invalid argument(s)";
    } else {
        var result = convNumb1 - convNumb2;
    }
    
    subtraction.innerHTML = result;
   

};

subtraction("8", 2);


//question 6

var change = document.querySelector(".page");
var heading = document.querySelector("h1");
var title = document.querySelector("title");
var headingText = document.querySelector("h1").innerText;
var body = document.querySelector("body");


function changeStyle() {
    title.innerHTML = "Updated title";
    body.style.backgroundColor = "yellow"
    heading.style.color = "green";
    heading.style.fontFamily = "impact";
    heading.innerHTML = "<a href ='#'>" + headingText + "</a>";
    ul.style.listStyle = "none";
    ul.style.padding = "0";
     
};

change.onclick = changeStyle;


//question 7

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];

var calc = document.querySelector(".price");
var total = document.querySelector("#total");
var sum = 0;
function calcPrice() {
    for (var i = 0; i < toys.length; i++){
        if (!isNaN(parseFloat(toys[i].price))) {
            sum += parseFloat(toys[i].price);
        }
    };
    console.log("sum:", sum);
    total.innerHTML = sum; 

    
};


calc.onclick = calcPrice; 




