const pegaHeader = document.getElementById('header-container');
pegaHeader.style.backgroundColor = "green"

const pegaBody = document.getElementById('container');
pegaBody.style.backgroundColor = "lightblue";

const pegaFooter = document.getElementById("footer-container");
pegaFooter.style.backgroundColor = "gray"

const pegaSection1 = document.getElementsByClassName('emergency-tasks')
console.log(pegaSection1)
pegaSection1[0].style.backgroundColor = "#b4a68e"

const pegaSection2 = document.getElementsByClassName('no-emergency-tasks')
pegaSection2[0].style.backgroundColor = "#f3daaa"

function pintaH3(){
const pegaH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 2; index++) {
    pegaH3[index].style.backgroundColor = "blue"
}
for (let index = 2; index < 4; index++) {
    pegaH3[index].style.backgroundColor = "black"
}

}
pintaH3();


