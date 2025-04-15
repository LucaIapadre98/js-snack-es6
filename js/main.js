//  Snack 1
// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare a schermo la bici con peso minore.


const bikes = [
{
    nome: "bicicetta1",
    peso: 80,
},
{
    nome: "bicicetta2",
    peso: 40,
},
{
    nome: "bicicetta3",
    peso: 55,
},
{
    nome: "bicicetta4",
    peso: 60,
},
{
    nome: "bicicetta5",
    peso: 35,
},
]
let lightesBike

for(const bike of bikes){
   // console.log(bike.peso);
    if(lightesBike === undefined || bikes.peso < lightesBike.peso){
        lightesBike = bike;
    }  
}
console.log(lightesBike);



 

//  Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".

let points = Math.floor(Math.random() * 50);
let fouls = Math.floor(Math.random() * 10);

let points1 = Math.floor(Math.random() * 50);
let fouls1 = Math.floor(Math.random() * 10);

let points2 = Math.floor(Math.random() * 50);
let fouls2 = Math.floor(Math.random() * 10);

let points3 = Math.floor(Math.random() * 50);
let fouls3 = Math.floor(Math.random() * 10);

const players = [
    {
        name: "Andrea",
        points:"punti fatti" + ":" + points,
        fouls:"falli subiti" +":" +   fouls,
    },
    {
        name: "Antonio",
        points:"punti fatti" + ":" + points1,
        fouls:"falli subiti" +":" +   fouls1,
       
    },
    {
        name: "Alessio",
        points:"punti fatti" + ":" + points2,
        fouls:"falli subiti" +":" + fouls2,
    },
    {
        name: "Angelo",
        points:"punti fatti" + ":" +   points3,
        fouls:"falli subiti" +":" +   fouls3,
    },
]

 console.table(players);

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.
 
let fouls5 = Math.floor(Math.random() * 10);
let fouls6 = Math.floor(Math.random() * 10);
let fouls7 = Math.floor(Math.random() * 10);
let fouls8 = Math.floor(Math.random() * 10);

const player = [
    {
        Name: "Andrea",
        Fouls: "falli subiti" +":" + fouls5,
    },
    {
        Name: "Antonio",
        Fouls:"falli subiti" +":" +  fouls6,
       
    },
    {
        Name: "Alessio",
        Fouls:"falli subiti" +":" +   fouls7,
    },
    {
        Name: "Angelo",
        Fouls:"falli subiti" +":" +   fouls8,
    },
]

console.table(player);








