// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("myHeader");
    if(y.className === "header"){
        y.className += " responsive";
    } else {
        y.className = "header";
    }
}