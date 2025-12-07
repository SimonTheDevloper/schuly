import { speichereDaten, ladeDaten } from "../js/utils/speicher.js";

let aktuelleDaten = ladeDaten();
const hinzufuegenDialog = document.getElementById('hinzufuegenDialog');
const fachAuswahl = document.getElementById('fachAuswahl');
const tagAuswahl = document.getElementById('tagAuswahl');
const abbrechenBtn = document.getElementById('abbrechenBtn');
const hinzufuegenDialogBtn = document.getElementById('hinzufuegenDialogBtn');
const hinzufuegenModalBtn = document.getElementById('addfächerBtn');

function renderStundenplan() {
    aktuelleDaten.stundenplan.forEach(tag => {
        const ul = document.getElementById(`fächer${tag.wochenTag}`);
        ul.innerHTML = '';

        tag.fächer.forEach(fachname => {
            const li = document.createElement('li');
            li.textContent = fachname;
            ul.appendChild(li);
        });
    });
}

function updateFachAuswahl() {
    fachAuswahl.innerHTML = '';
    const fachNamenArray = aktuelleDaten.fächer.map(fach => fach.fachname);

    if (fachNamenArray.length === 0) {
        const option = document.createElement('option');
        option.value = "";
        option.textContent = "Keine Fächer verfügbar";
        fachAuswahl.appendChild(option);
    } else {
        fachNamenArray.forEach(fach => {
            const option = document.createElement('option');
            option.value = fach;
            option.textContent = fach;
            fachAuswahl.appendChild(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderStundenplan();
    updateFachAuswahl();
});

hinzufuegenModalBtn.addEventListener('click', () => {
    updateFachAuswahl();
    hinzufuegenDialog.style.display = 'flex';
});

abbrechenBtn.addEventListener('click', () => {
    hinzufuegenDialog.style.display = 'none';
});

hinzufuegenDialog.addEventListener('click', (e) => { // sort dafür falls man ganz wo anders klick außer dem dialog dass es sich schließt
    if (e.target === hinzufuegenDialog) {
        hinzufuegenDialog.style.display = 'none';
    }
});

hinzufuegenDialogBtn.addEventListener('click', () => {
    const fach = fachAuswahl.value;
    const tag = tagAuswahl.value;

    if (!fach || fach === "Keine Fächer verfügbar") return;

    const wochenTagObj = aktuelleDaten.stundenplan.find(t => t.wochenTag === tag);
    if (wochenTagObj) {
        wochenTagObj.fächer.push(fach);
        speichereDaten(aktuelleDaten);
        renderStundenplan();
        hinzufuegenDialog.style.display = 'none';
    }
});