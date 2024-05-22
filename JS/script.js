const team = 
[
{
    nome: 'wayne Barnett',
    ruolo: 'Founder & Ceo',
    foto: 'wayne-barnett-founder-ceo.jpg',   
},
{
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
},
{
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
},
{
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
},
{
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
},
{
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
},
];
//  dichiaro la parte del doom
const foglio = document.querySelector('.team');
const carte = document.querySelector('.card');
const boxElement = document.createElement('div');
boxElement.classList.add('box');

// ciclo per stampare sulla pagina la griglia
for (let index = 0; index < 6; index++) {
    const squareElement = document.createElement('article');
    squareElement.classList.add('card');
    boxElement.appendChild(squareElement);
}
document.body.appendChild(boxElement);

// stampa in pagina 
for (let index = 0; index < team.length; index++) {
    console.log(team[index]);   
}


