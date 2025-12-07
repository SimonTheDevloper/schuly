import { daten } from "./daten.js";
import { speichereDaten, ladeDaten } from "./speicher.js";

let aktuelleDaten = ladeDaten();
function renderStundenplan() {

    aktuelleDaten.stundenplan.forEach(tag => {
        const ul = document.getElementById(`fächer${tag.wochenTag}`)

        ul.innerHTML = '';

        // für jeden Tag die fächer in ner li hinzufügen
        tag.fächer.forEach(fachname => {
            const li = document.createElement('li');
            li.textContent = fachname;
            console.log(fachname);
            ul.appendChild(li);
        });
    });
};
document.addEventListener('DOMContentLoaded', renderStundenplan);

const hinzufügenBtn = document.getElementById('addfächerBtn');

hinzufügenBtn.addEventListener('click', () => {
    const fachNamenArray = aktuelleDaten.fächer.map(fach => fach.fachname);
    console.log(fachNamenArray);
    const fach = prompt(`Wähle ein Fach aus diesen aus: ${fachNamenArray}`);
    const tag = prompt(`zu welchem Tag soll dieses Fach (${fach}) hinzugefügt werden.`);

    const wochenTagObj = aktuelleDaten.stundenplan.find(t => t.wochenTag === tag);
    wochenTagObj.fächer.push(fach);
    console.log(wochenTagObj);
    speichereDaten(aktuelleDaten)
    renderStundenplan()
})