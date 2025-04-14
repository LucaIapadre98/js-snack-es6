// #Snack 1
// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare a schermo la bici con peso minore.

const bikes = [
{
    "nome": "bicicetta1",
    "peso":"10kg",
},
{
    "nome": "bicicetta2",
    "peso":"15kg",
},
{
    "nome": "bicicetta3",
    "peso":"20kg",
},
{
    "nome": "bicicetta4",
    "peso":"25kg",
},
{
    "nome": "bicicetta5",
    "peso":"30kg",
}
]

let bike = bikes.find(bike => bike.peso == "10kg" );
console.log(bike);
