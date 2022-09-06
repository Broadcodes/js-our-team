/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// Creazione di un array di oggetti per rappresentare i membri del team
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]

// MILESTONE 1:
// Stampo su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const teamUser = team[i];

    console.log(`Utente ${i + 1}:`);
    for (let key in teamUser) {
        console.log(`${key}: ${teamUser[key]}`);
    }
}

// MILESTONE 2:
// Stampo le stesse informazioni su DOM sottoforma di stringhe
const container = document.querySelector(".milestone2");

for (let i = 0; i < team.length; i++) {
    const teamUser = team[i];

    container.innerHTML += `<h2>Utente ${i + 1}:</h2>`;

    for (let key in teamUser) {
        container.innerHTML += 
        `<p>
            ${key}: ${teamUser[key]}
        </p>`;
    }
}