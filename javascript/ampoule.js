//
// Nom : ampoule.js
// Date et auteur : GAGNIEUX Nicolas - 2026-11-20
//
// Description :
//		Programme javascript pour l'exercice "Ampoule" 
//		Permet de changer l'image d'une ampoule allumée ou éteinte en cliquant sur l'ampoule

// Fonction OnOffAmpoule :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - change l'image de l'ampoule allumée ou éteinte

function OnOffAmpoule() {
    var image = document.getElementById("myImage");
    if (image.src.search("pic_bulboff.gif") > -1) {
        image.src = "images/pic_bulbon.gif";
    } else {
        image.src = "images/pic_bulboff.gif";
    }
}