// EXO 1.1

// let a = 10;
// let b = 20;
// let c = 0;

// c = a;
// a = b;
// b = c;

// EXO 1.2

// a = 2;
// b = 2;

// EXO 1.3

// let temp = c;
// let temp2 = b;
// b = a;
// c = temp2;
// a = temp;

// EXO 1.4

// 42312

// EXO 4.1

// 42312

// EXO 4.2

// 42312

// function recup() {
//     //variable qui récupère le contenu de l'imput1 (id="imput1")
//     let a = document.getElementById("imput1").value;
//     if(a ==""){
//         console.log("des champs sont vides");
//     }
//     //condition si le champ est Complété
//     else if (a !== NaN){
//         a = parseInt(a);
//     }
// }
// console.log("valeur à afficher dans la console du navigateur internet");
// document.write("valeur à afficher dans la page web");

// EXO 5.1

// 231 et 462

// EXO 5.2

// function recup() {
//     let a = document.getElementById("imput1").value;
//     console.log(a*a);
//     }

// EXO 5.3

// function calcultva (ht,quant,tva) {
//     let ttc = ht*quant*(1+tva/100);
//     console.log(`le prix HT est ${ht}, la quantité est ${quant}, la tva est ${tva}% et le prix total est ${ttc}`);
// }

// calcultva(5,1,20);

// EXO 6.1

// function posneg (a) {
//     if (a > 0) {
//         console.log("nombre positif")
//     }
//     else {
//         console.log("nombre négatif")
//     }
// }

// posneg(-2);

// EXO 6.2

// function negpos () {
//     let num1 = parseInt(prompt("entrez un nombre"));
//     let num2 = parseInt(prompt("entrez un nombre"));
//     if (num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0) {
//         console.log("produit positif");
//     }
//     else {
//         console.log("produit négatif");
//     }
// }

// negpos();

// EXO 6.3

// function troisnoms () {
//     let nom = (prompt("entrez un nom"));
//     let nom2 = (prompt("entrez un nom"));
//     let nom3 = (prompt("entrez un nom"));
//     if (nom<=nom2 && nom2<=nom3) {
//         console.log("c'est bien rangé en ordre alphabétique")
//     }
//     else {
//         console.log("c'est pas rangé en ordre alphabétique")
//     }
// }

// troisnoms();

// EXO 6.4

// function negpos () {
//     let num1 = parseInt(prompt("entrez un nombre"));
//     let num2 = parseInt(prompt("entrez un nombre"));
//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("c'est pas des nombres kabourd")
//         return;
//     }
//     if (num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0) {
//         console.log("produit positif");
//     }
//     else if (num1 == 0 || num2 == 0) {
//         console.log("t'es nul")
//     }
//     else {
//         console.log("produit négatif");
//     }
// }

// negpos();

// EXO 6.5

// function age () {
//     let age = parseInt(prompt("entrez votre âge"));
//     if (age >= 6 && age <= 7) {
//         console.log("Poussin")
//     }
//     else if (age >= 8 && age <= 9) {
//         console.log("Pupille")
//     }
//     else if (age >= 10 && age <= 11) {
//         console.log("Minime")
//     }
//     else if (age >= 12) {
//         console.log("Cadet")
//     }
//     else {
//         console.log("Retourne bouffer de la soupe")
//     }
// }

// age();

// EXO 7.1

// function recup() {
//     let a = parseInt(document.querySelector("#in1").value);
//     for (let i = 0 ; i < 10 ; i++) {
//         a = a+1;
//         console.log(a);
//     }
// }

// EXO 7.2

// function recup() {
//     let a = parseInt(document.querySelector("#in1").value);
//     for (let i = 1 ; i <= 10 ; i++) {
//         console.log(`${a} x ${i} = ${a*i}`);
//     }
// }

// EXO 8.1

// function recup () {
// let un = document.getElementById("nom").value;
// let deux = document.getElementById("prenom").value;
// let trois = document.getElementById("code").value;
// let tab = [un,deux,trois];
// console.log(tab)
// }








