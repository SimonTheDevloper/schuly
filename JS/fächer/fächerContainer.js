import { daten } from "../utils/daten.js";
import { speichereDaten, ladeDaten } from "../utils/speicher.js";

let aktuelleDaten = ladeDaten();

if (!aktuelleDaten) {
    console.log("Speicher war leer. Lade leere Struktur und speichere sie jetzt.");

    aktuelleDaten = daten;

    speichereDaten(aktuelleDaten);
}

function renderFächerContainer() {
    const container = document.getElementById('fachContainer');
    container.innerHTML = '';

    aktuelleDaten.fächer.forEach((fach, index) => {
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
            `<input placeholder="z.B.: Schnellhefzer" type="text" id="input-${fachID}">`

        const buttonElement = document.createElement('button');
        buttonElement.textContent = "Hinzufügen";
        buttonElement.id = `btn-${fachID}`

        buttonElement.addEventListener('click', () => neuesMaterialHinzufügen(index));
        hinzufügenSektion.appendChild(buttonElement)
        fachDiv.appendChild(hinzufügenSektion);
        container.appendChild(fachDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderFächerContainer);

function neuesMaterialHinzufügen(fachIndex) {
    const fachID = `fach-${fachIndex}`
    const inputElement = document.getElementById(`input-${fachID}`);
    const neuesMaterial = inputElement.value.trim();
    console.log(neuesMaterial);

    const fachObjekt = aktuelleDaten.fächer[fachIndex];
    fachObjekt.materialien.push(neuesMaterial);
    speichereDaten(aktuelleDaten);
    renderFächerContainer();
}