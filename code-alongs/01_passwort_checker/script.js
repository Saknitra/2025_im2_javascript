console.log('hi script.js')

let password = prompt ("Passwort eingeben");
let username = prompt ("Username eingeben");

CheckPassword(password)
CheckLength(username, 7)

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

function CheckLength(TestString, TestLength){
    if (TestString.length >= TestLength) {
    console.log ("Der Username ist lang genug");
    } 

    else {
    console.log("Bitte verwende einen längeren Username.");
    }
}