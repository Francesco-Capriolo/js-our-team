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

/* Aggiungi in fondo all 'esercizio un form con nome, ruolo e un link all'
immagine che con un bottone consentano di aggiungere un team member per volta in più a quelli già presenti. */

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
    console.log(team[chiave]);
}

let carouselContent = "";

for (let i = 0; i < team.length; i++) {
    carouselContent += `<div class="col-12 col-md-6 col-lg-4">
                <div class="mb-2">
                    <img id="image" class="img-fluid w-100" src="${"img/"+team[i].image}" alt="${team[i].name}">
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

document.getElementById("submit").addEventListener('click', function () {
    const newName = document.getElementById("inputName");
    const newRole = document.getElementById("inputRole");
    console.log(newName.value);

    const newMember = {
        name: newName.value,
        role: newRole.value,
    };

    team.push(newMember);
    carouselContent = `<div class="col-12 col-md-6 col-lg-4">
                <div class="mb-2">
                    <img id = "image"
                    class = "img-fluid w-100"
                    src = "${"img/"+newMember.image}" alt="${newMember.name}">
                </div>
                <div id="description" class="text-center">
                    <h3 id="name">
                        ${newMember.name}
                    </h3>
                    <p id="role">
                    ${newMember.role}
                    </p>
                </div>
            </div>
            `
    const carouselWrapper = document.querySelector('section.team-wrapper');
    carouselWrapper.innerHTML += carouselContent;
    console.log(team)
})