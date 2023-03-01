let myTutorial  = document.getElementById("DomManipulation"); //Skaber forbindelse til HTML siden gennem ID'et 

let MyHeadline = document.createElement("h1"); //Skaber h1 tagget
MyHeadline.classList.add("myHeader"); //Skaber classen myHeader (som i CSS)
MyHeadline.innerHTML = 'Min Overskrift'; //Skaber teksten i Html'en

myTutorial.appendChild(MyHeadline); //Tilføjer tagget til html siden

console.log(myTutorial.innerHTML);
