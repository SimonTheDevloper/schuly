import { daten } from "./daten.js";

function renderFächerContainer() {
    const container = document.getElementById('fachContainer');
    container.innerHTML = '';

    daten.fächer.forEach((fach, index) => {
        console.log(index)
        const fachID = `fach-${index}`
        const fachName = fach.fachname
        const materialListe = fach.materialien

        console.log(fachName)
        const fachDiv = document.createElement('div');
        fachDiv.id = fachID
        fachDiv.innerHTML += `<h2>${fachName}</h2>`;

        const materialSektion = document.createElement('section');
        materialSektion.innerHTML += '<h3>Materialien:</h3>';

        const ul = document.createElement('ul');

        materialListe.forEach(material => {
            ul.innerHTML += `<li>${material}</li>`
        });

        materialSektion.appendChild(ul);
        fachDiv.appendChild(materialSektion);



        const hinzufügenSektion = document.createElement('section');
        hinzufügenSektion.innerHTML += '<h3>Neues Material hinzufügen</h3>'
        hinzufügenSektion.innerHTML +=
            `<input placeholder="z.B.: Schnellhefzer" type="text" id="input-${fachID}"> 
    <button id="btn-${fachID}">Hinzufügen</button>`

        fachDiv.appendChild(hinzufügenSektion);
        container.appendChild(fachDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderFächerContainer);