let varA = 1;
let varB = '2';
let varC = 2;

// Hvis varA skal svarer til varB
if (varA == varB) {

    console.log('varA svarer til varB') //bliver dette skrevet i consollen
}

// Hvis varA ikke svarer til varB
else {
    console.log('A er ikke lig med B') //bliver dette skrevet i consollen
}

// ------------------------------------------------------------

if (varA == varB && varA == varC) {

    console.log('A og B skal være ens, og A og C skal være ens')

}

if (varB == varC || varA == varC) {

    console.log('enten A eller C skal være rigtig')
}

// ------------------------------------------------------------

let score = 49; 

if(score >= 90){// Hvis spilleren har 90 eller over
    console.log("Grad A");
    }

    else if(score >=70){// Hvis spilleren har 70 til 89 
        console.log("Grad B");
    }

    else if(score >=50 ){// Hvis spilleren har 50 eller 69
        console.log("Grad C");
    }

    else{
        console.log("Grad D"); // Hvis spilleren har 49 eller under
    }
