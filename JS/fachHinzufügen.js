import { daten } from "./daten.js";
const neuesFach = document.getElementById("neuesFach");
const hinzufügenButton = document.getElementById("fachHinzufügen");


hinzufügenButton.addEventListener('click', neusesFachHinzufügen);

function neusesFachHinzufügen() {
    const neuesFachObjekt = { fachnahme: neuesFach.value, materialien: [] }
    daten.fächer.push(neuesFachObjekt);
    console.log(daten.fächer)
}
