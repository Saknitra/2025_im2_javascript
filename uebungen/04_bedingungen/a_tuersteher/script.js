/*
* 04.a - Türsteher
* Du arbeitest in einem Club als Türsteher:in. Du willst
* deinen Arbeitsalltag automatisieren und baust dir eine
* Funktion, welche ein Alter (number) als Parameter nimmt
* und dann in der Konsole ausspuckt, welche Getränke mit
* diesem Alter konsumiert werden dürfen.
*
* Unter 16: Du bist zu jung um Alkohol zu kaufen.
* Unter 18: Du bist zu jung für Schnaps.
* 18 oder darüber: Yeah, volljährig - kauf was du willst.
*
* Wenn du Lust hast, kannst du auch versuchen die Funktion
* noch etwas schlauer zu machen. Und zwar wäre es ja am
* besten, wenn anstatt das Alter direkt ein Geburtsdatum
* als Parameter eingegeben werden könnte. Nimm dir hierzu
* diese Anleitung zur Hilfe (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)
* oder arbeite mit KI.
* */

let Age = prompt ("Hier dein Alter eingeben")

checkAge(Age)

function checkAge(DrinkingAge) {
    if (DrinkingAge < 16) {
        console.log("Du bist zu jung um Alkohol zu trinken.")
    } else if (16 <= DrinkingAge && DrinkingAge < 18) { /*Hier nach 16 eine Klammer und ein Gleichzeichen, weil 16 nicht zu jung für Bier, aber für Schnaps. Sonst zählt das nicht in das else if rein*/
        console.log("Du bist zu jung für Schnaps.") /*else if brauchst du, damit es keine Doppeldeckungen gibt und eine Variable nicht in 2 Kategorien reinfallen kann*/
    } else { /*else hat nie eine Bedingung, sondern ist immer nur der Rest*/
        console.log ("Yeah, volljährig - kauf was du willst!")
    }
}