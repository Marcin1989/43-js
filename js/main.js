

function matma (num1, num2) {
    let sum = num1 + num2;
    let substraction = num1 - num2;
    let product = num1 * num2;
   
    
    

    if (sum >= 0) {
        console.log("Wynik dodawania wynosi " + sum)  
    } else { 
        console.log("Wynik nieprawidlowy " + sum)
    }
    if (substraction >= 0) {
        console.log("Wynik odejmowania wynosi "  + substraction)
    } else {
        console.log("Wynik nieprawidlowy " + substraction)
    }
    if (product >= 0) {
        console.log("Wynik mnozenia wynosi "  +  product)
    } else {
        console.log("Wynik nieprawidlowy " + product)
    }
    
   }

matma(-4,-3);