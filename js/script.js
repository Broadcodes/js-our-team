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

/*
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
*/

/*
    // BONUS 1:
    // Trasformo la stringa foto in una immagine effettiva
    const container = document.querySelector(".milestone2");

    for (let i = 0; i < team.length; i++) {
        const teamUser = team[i];

        container.innerHTML += `<h2>Utente ${i + 1}:</h2>`;

        for (let key in teamUser) {

            const detailUser = teamUser[key];

            if(key !== "foto"){
                container.innerHTML += `<p>${key}: ${detailUser}</p>`;
            } else {
                container.innerHTML += `<p>${key}:</p> <img src="img/${detailUser}" alt="${detailUser}">`;
            }
        }
    }
*/

// BONUS 2:
// Organizzo i singoli membri in card/schede

// Recupero l'elemento "cards" dall'HTML
const cards = document.querySelector(".cards");

// Ciclo per la lunghezza totale dell'array-oggetto in modo da creare N card
for (let i = 0; i < team.length; i++) {

    // Aggiungo altre informazioni (non richieste dalla consegna dell'esercizio) all'oggetto
    // PRIMO DATO AGGIUNTO
    team[i].shortDescription = `Mi chiamo ${team[i].nome}, sono un ${team[i].ruolo}
    e lavoro in questa azienda da ${Math.floor(Math.random() * 10 + 1)} anni`;
    // Nell'istruzione precedente ho creato un valore random per non avere dei valori statici, nella realtà non sarebbe così

    // SECONDO DATO AGGIUNTO
    const descriptionTeam = [
        `Ho da sempre avuto la passione per il ${team[i].ruolo}. Dopo il Liceo Scientifico, ho conseguito una Laurea Triennale in Economia e una Laurea Magistrale in Scienze Politiche`,
        `Ho maturato un bel po' di esperienza nel settore del ${team[i].ruolo} per diverse aziende, proprio grazie alla mia passione che da sempre mi attira verso questo settore`,
        `Penso che questa Azienda possa essere il perfetto posto in cui dare una svolta alla mia posizione lavorativa e il mio trampolino di lancio per una rapida carriera nel ${team[i].ruolo}`,
        `Visto la mia precedente attività in un altro settore, non possiedo ancora esperienza diretta nel ${team[i].ruolo}, ma sono sicuro che con la mia passione potrò colmare questa mancanza in brevissimo tempo`,
        `Sono appassionato del settore e provo molta soddisfazione al termine di ogni progetto. Con il passare del tempo, ho imparato a prestare attenzione a tutti i dettagli.`,
        `Sono una persona che crede fermamente nella forza del gruppo. Per questo motivo, nella mia carriera, ho sempre cercato di creare un dialogo costante e costruttivo con i colleghi.`];

    team[i].description = `${descriptionTeam[i]}`;

    // -------------------------------------------------------------------------------------

    const teamUser = team[i];

    // Creo un nuovo elemento div che rappresenta la singola card
    const card = document.createElement("div");

    // Aggiungo all'elemento div creato la classe "card" presente in css
    card.classList.add("card");

    // Aggiungo le immagini profilo ad ogni card
    card.innerHTML += `<img src="img/${team[i].foto}" alt="${team[i].foto}">`;

    // Aggiungo i dati di ogni utente ad ogni card
    card.innerHTML += `<h2 class="nameUserTeam">${team[i].nome}</h2>`;
    card.innerHTML += `<h3 class="taskUserTeam">${team[i].ruolo}</h3>`;
    card.innerHTML += `<p class="description">${team[i].shortDescription}</p>`;

    // Creo un nuovo elemento div per ogni singola card per avere la descrizione completa
    const descriptionUser = document.createElement("div");

    // Aggiungo all'elemento div creato la classe "card" presente in css
    descriptionUser.classList.add("descriptionUser");

    // Aggiungo la descrizione completa ad ogni card
    descriptionUser.innerHTML += `<p class="description">${team[i].description}</p>`;

    // Aggiungo gli elementi creati alla card
    card.append(descriptionUser);

    // Aggiungo gli elementi creati al DOM
    cards.append(card);
}