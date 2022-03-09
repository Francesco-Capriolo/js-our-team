/* 
Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
    stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
    trasformare la stringa foto in una immagine effettiva
BONUS 2:
    organizzare i singoli membri in card / schede */


const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//ciclo for in
for (let chiave in team) {
    team.push(imageJs)
    console.log(team[chiave]);
}
/* /* let text = "../img/";  */

function imageJs() {
    text = "img/";
    return this.text + this.image;
}

let carouselContent = "";

for (let i = 0; i < team.length; i++) {
    carouselContent += `<div class="col-4">
                <div class="mb-2">
                    <img id="image" class="img-fluid" src="${team[i].image}" alt="${team[i].name}">
                </div>
                <div id="description" class="text-center">
                    <h3 id="name">
                        ${team[i].name}
                    </h3>
                    <p id="role">
                    ${team[i].role}
                    </p>
                </div>
            </div> `
}

const carouselWrapper = document.querySelector('section.team-wrapper');
carouselWrapper.innerHTML += carouselContent;

/* document.getElementById("image").innerHTML = team.image;
document.getElementById("name").innerHTML = team.name;
document.getElementById("role").innerHTML = team.role; */