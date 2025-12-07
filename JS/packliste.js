import { speichereDaten, ladeDaten } from "../js/utils/speicher.js";

let daten = ladeDaten();


const packlisteContainer = document.getElementById('heutigeMaterialien');

// Bestimme den heutigen Wochentag
////const heuteWochentag = heuteDatum.toLocaleDateString("de-DE", { weekday: "long" });
let heuteWochentag = "Montag"
let alleWochentage = daten.stundenplan;
let einWochentag = alleWochentage.filter(objekt => objekt.wochenTag === heuteWochentag);
let fächerFürEinenTag = einWochentag.map(tag => tag.fächer).flat();

if (fächerFürEinenTag.length === 0) {
    packlisteContainer.innerHTML = '<div class="keine-materialien">Heute keine Fächer geplant</div>';
} else {
    const alleFächer = daten.fächer;
    const fachObjektZumFach = alleFächer.filter(fach =>
        fächerFürEinenTag.includes(fach.fachname)
    );
    const materialienZumFach = fachObjektZumFach.map(t => t.materialien).flat();

    if (materialienZumFach.length === 0) {
        packlisteContainer.innerHTML = '<div class="keine-materialien">Keine Materialien für heutige Fächer hinterlegt</div>';
    } else {
        const ul = document.createElement('ul');

        materialienZumFach.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            ul.appendChild(li);
        });

        packlisteContainer.innerHTML = '';
        packlisteContainer.appendChild(ul);
    }
}