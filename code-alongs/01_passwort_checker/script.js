console.log('hi script.js')

let password = prompt ("Passwort eingeben"); /*String (Passwort eingeben) wird als Variabel Password gespeichert.*/
let username = prompt ("Username eingeben"); /*Das Gleiche wie oben einfach mit anderer Variabel (Username eingeben)*/

CheckLength(password, 12)
CheckLength(username, 7)

/*Diese kommende Funktion ist nun überflüssig, aber haben wir als Erstes gemacht*/
function CheckPassword(password){
    if (password.length > 11) {
    console.log ("Das Passwort ist lang genug");
    /*Zeichenketten müssen in irgendetwas stehen. Also entweder: "" oder '' oder ´´.*/
    } 

    else {
    console.log("Bitte verwende ein längeres Passwort.");
    /*normalerweise am Ende der Zeile ein Semikolon, das ist aber nicht wirklich nötig in JavaScript. Aber lieber hinsetzen*/
    }
}

function CheckLength(TestString, TestLength){ /*TestString bezieht sich auf die Zeichenkette (username in diesem Fall) und
    die TestLength bezieht sich auf die Zahl nach Username*/
    if (TestString.length >= TestLength) { /*Die Länge der TestString soll gleich oder grösser als 7 sein, haben wir hier festgelegt*/
    console.log ("Der Text ist lang genug");
    } 

    else {
    console.log("Bitte verwende einen längeren Text.");
    }
}