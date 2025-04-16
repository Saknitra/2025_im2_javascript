/*
* 03.a - Help The Boss
* Du arbeitest in einer Entwickler-Firma als JavaScript
* Profi. Deine Chefin möchte von dir, dass du vier Funktionen
* für sie vorbereitest, die sie für ein Projekt braucht.
* Folge ihren Anweisungen.
* */


/*
* 1. Schreibe mir eine Funktion, die drei Zahlen als Parameter hat
* und diese miteinander addiert und das Ergebnis zurückgibt.
* Teste die Funktion mit folgenden Wertegruppen und gib das
* Ergebnis in der Konsole aus.
* 1, 4, 10
* 332.2, 55, -40
* */

/*let Number1 = prompt ("Hier eine beliebige Zahl eingeben")
let Number2 = prompt ("Hier eine weitere beliebige Zahl eingeben")
let Number3 = prompt ("Hier nochmal eine letzte beliebige Zahl eingeben")

CheckAddNumbers (Number1, Number2, Number3)

function CheckAddNumbers(a, b, c) { /*immer gleich viele Parameter hier verwenden, wie oben festgelegt*/
    /*let Sum = a + b + c
        console.log (`Die Summe ist ${Sum}`)
}*/

/*
* 2. Schreibe mir eine Funktion, die den eingegebenen Parameter
* Name in der Konsole ausgibt. Teste das bitte mit folgenden Werten:
* Lena
* Annalena
* */

let Name = prompt ("Hier dein Name eingeben")

checkName(Name)

function checkName (persönlicherName) {
    console.log(`Dein Name ist ${persönlicherName}`)
}

/*
* 3. Schreibe mir eine Funktion, die eine zufällige Zahl zwischen
* 33 und 44 retourniert. Teste das ganze 3 Mal.
* */


/*
* 4. Schreibe mir eine Funktion, die mir den als Parameter
* mitgegebenen Text wie folgt bearbeitet:
* - Der Buchstabe 'e', bzw. 'E' soll entfernt werden
* - Das Wort 'Holz' soll durch 'Baum ersetzt werden'
* - Alles in Grossbuchstaben
* Das Resultat soll zurückgegeben werden. Teste die Funktion mit folgenden Texten:
* -> Er verbrachte den Nachmittag damit, Holz für das abendliche Lagerfeuer zu sammeln
* -> Der alte Schreiner stand in der Morgendämmerung in seiner Werkstatt und blickte auf das frische Holz, das er kürzlich geholt hatte. Mit sorgfältiger Handarbeit begann er, das Holz in wunderschöne Möbelstücke zu verwandeln. Für ihn war jedes Stück Holz ein ungeschriebenes Buch seiner Erzählung.
* */ 
