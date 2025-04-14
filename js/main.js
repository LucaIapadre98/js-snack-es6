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


// #Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".

let points = Math.floor(Math.random() * 50);
let fouls = Math.floor(Math.random() * 10);

const players = [
    {
        name: "Andrea",
        points: points,
        fouls:  fouls,
    },
    {
        name: "Antonio",
        points: points,
        fouls:  fouls,
       
    },
    {
        name: "Alessio",
        points: points,
        fouls:  fouls,
    },
    {
        name: "Angelo",
        points: points,
        fouls:  fouls,
    },
]

console.table(players);

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.
 
let fouls1 = Math.floor(Math.random() * 5);
const player = [
    {
        name: "Andrea",
        fouls1:  fouls,
    },
    {
        name: "Antonio",
        fouls1:  fouls,
       
    },
    {
        name: "Alessio",
        fouls1:  fouls,
    },
    {
        name: "Angelo",
        fouls1:  fouls,
    },
]

console.table(player);








