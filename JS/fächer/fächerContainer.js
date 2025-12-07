import { daten } from "../utils/daten.js";
import { speichereDaten, ladeDaten } from "../utils/speicher.js";

let aktuelleDaten = ladeDaten();
if (!aktuelleDaten) {
    console.log("Speicher war leer. Lade leere Struktur und speichere sie jetzt.");

    aktuelleDaten = daten;

    speichereDaten(aktuelleDaten);
}

let aktuellesFachIndex = null;

const neuesMaterialDialog = document.getElementById('neuesMaterialDialog');
const neuesMaterialEingabe = document.getElementById('neuesMaterialEingabe');
const neuesMaterialBestätigen = document.getElementById('neuesMaterialBestätigen');
const materialAbbrechenKnopf = document.getElementById('materialAbbrechenKnopf');

materialAbbrechenKnopf.addEventListener('click', () => {
    neuesMaterialDialog.style.display = 'none';
});

// wieder Ausshalb des diaglogs kann man schließen
neuesMaterialDialog.addEventListener('click', (e) => {
    if (e.target === neuesMaterialDialog) {
        neuesMaterialDialog.style.display = 'none';
    }
});



neuesMaterialBestätigen.addEventListener('click', () => {
    const neuesMaterial = neuesMaterialEingabe.value.trim();

    if (neuesMaterial && aktuellesFachIndex !== null) { ///Es muss ein Fach ausgewählt sein + Der Text darf nicht leer sein
        const fachObjekt = aktuelleDaten.fächer[aktuellesFachIndex];
        fachObjekt.materialien.push(neuesMaterial);
        speichereDaten(aktuelleDaten);
        renderFächerContainer();
        neuesMaterialDialog.style.display = 'none';
    }
});

export function renderFächerContainer() {
    const container = document.getElementById('fachContainer');
    container.innerHTML = '';

    aktuelleDaten.fächer.forEach((fach, index) => {
        const fachKarte = document.createElement('div');
        fachKarte.className = 'fach-karte';
        fachKarte.id = `fach-${index}`;

        const fachNameElement = document.createElement('h2');
        fachNameElement.textContent = fach.fachname;
        fachKarte.appendChild(fachNameElement);

        const materialSektion = document.createElement('section');
        const materialUeberschrift = document.createElement('h3');
        materialUeberschrift.textContent = 'Materialien:';
        materialSektion.appendChild(materialUeberschrift);

        const ul = document.createElement('ul');
        fach.materialien.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            ul.appendChild(li);
        });
        materialSektion.appendChild(ul);
        fachKarte.appendChild(materialSektion);

        const hinzufügenBereich = document.createElement('div');
        hinzufügenBereich.className = 'material-hinzufuegen';

        const materialButton = document.createElement('button');
        materialButton.textContent = '+ Material hinzufügen';
        materialButton.dataset.fachIndex = index;

        materialButton.addEventListener('click', () => {
            aktuellesFachIndex = index;
            neuesMaterialEingabe.value = '';
            neuesMaterialDialog.style.display = 'flex';
        });

        hinzufügenBereich.appendChild(materialButton);
        fachKarte.appendChild(hinzufügenBereich);

        container.appendChild(fachKarte);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFächerContainer);
} else {
    renderFächerContainer();
}