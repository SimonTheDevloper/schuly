import { daten } from "./daten.js";
import { speichereDaten, ladeDaten } from "./speicher.js";

let aktuelleDaten = ladeDaten();

if (!aktuelleDaten) {
    console.log("Speicher war leer. Lade leere Struktur und speichere sie jetzt.");

    aktuelleDaten = daten;

    speichereDaten(aktuelleDaten);
}

const neuesFach = document.getElementById("neuesFach");
const hinzufügenButton = document.getElementById("fachHinzufügen");


hinzufügenButton.addEventListener('click', neusesFachHinzufügen);

function neusesFachHinzufügen() {
    const neuesFachObjekt = { fachname: neuesFach.value, materialien: [] }
    aktuelleDaten.fächer.push(neuesFachObjekt);
    console.log(aktuelleDaten.fächer)
    speichereDaten(aktuelleDaten);
}
