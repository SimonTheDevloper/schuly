import { daten } from "./daten.js";

function renderStundenplan() {

    daten.stundenplan.forEach(tag => {
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
renderStundenplan();