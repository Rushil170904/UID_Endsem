function dataSubmit(){

    var radioButton = document.getElementById("cm");

    if (radioButton.checked){
        var h = parseInt(document.getElementById("height").value);
        var w = parseInt(document.getElementById("weight").value);

        var bmi = 10000*w/(h*h);

        document.getElementById("bmiDisplay").innerHTML = bmi;
    }
    
    else{
        var h = parseFloat(document.getElementById("height").value);
        var w = parseFloat(document.getElementById("weight").value);

        var bmi = w/(h*h);

        document.getElementById("bmiDisplay").innerHTML = bmi;
    }
}

function myM(){
        
    document.getElementById("unit").innerHTML = " m";

}

function myCm(){
document.getElementById("unit").innerHTML = " cm";
}

function pinkChange(){
    document.getElementById("navBar").style.backgroundColor = "rgb(125,30,110)";
    document.getElementById("myFormID").style.backgroundColor = "rgb(236,218,232)";
    document.getElementById("information").style.backgroundColor = "rgb(70,35,70)";

    document.getElementById("male").style.backgroundColor = "white";
    document.getElementById("female").style.backgroundColor = "lightpink";

    document.body.style.backgroundImage = "url(fBackground.jpg)";

    document.getElementById("design").style.backgroundColor = "white";

    document.getElementById("dtext").style.color = "black";

    document.getElementById("navBar").style.transition = "all 2s";
    document.getElementById("myFormID").style.transition = "all 2s";
    document.getElementById("information").style.transition = "all 2s";
    document.getElementById("design").style.transition = "all 1s";
    document.getElementById("dtext").style.transition = "all 0.5s";

    document.getElementById("female").style.transition = "all 0.25s";

    document.body.style.transition = "all 2s";
}

function blueChange(){
    document.getElementById("navBar").style.backgroundColor = "rgb(40,55,100)";
    document.getElementById("myFormID").style.backgroundColor = "rgb(130,180,210)";
    document.getElementById("information").style.backgroundColor = "rgb(25,40,55)";

    document.getElementById("male").style.backgroundColor = "lightblue";
    document.getElementById("female").style.backgroundColor = "white";


    document.body.style.backgroundImage = "url(mBackground.jpg)";

    document.getElementById("design").style.backgroundColor = "rgb(2,25,54)";

    document.getElementById("dtext").style.color = "white";

    document.getElementById("navBar").style.transition = "all 2s";
    document.getElementById("myFormID").style.transition = "all 2s";
    document.getElementById("information").style.transition = "all 2s";
    document.getElementById("design").style.transition = "all 1s";
    document.getElementById("dtext").style.transition = "all 0.5s";

    document.getElementById("male").style.transition = "all 0.25s";

    document.body.style.transition = "all 2s";

}









