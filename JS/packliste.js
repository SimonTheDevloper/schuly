//import { daten } from "./testDaten.js";
import { speichereDaten, ladeDaten } from "../js/utils/speicher.js";

let daten = ladeDaten();
const datenDemo = {
    fächer: [
        {
            fachname: "Mathe",
            materialien: ["Mathebuch", "Übungsheft", "Taschenrechner"]
        },
        {
            fachname: "Englisch",
            materialien: ["Englischbuch", "Heft"]
        },
        {
            fachname: "IT",
            materialien: ["IT-Buch", "USB-Stick"]
        },
        {
            fachname: "Geschichte",
            materialien: ["Geschichtsbuch", "Heft"]
        },
        {
            fachname: "Sport",
            materialien: ["Sportsachen", "Turnschuhe"]
        }
    ],
    stundenplan: [
        {
            wochenTag: "Montag",
            fächer: ["Mathe", "Englisch"]
        },
        {
            wochenTag: "Dienstag",
            fächer: ["IT", "Englisch"]
        },
        {
            wochenTag: "Mittwoch",
            fächer: ["Geschichte", "Mathe", "Sport"]
        },
        {
            wochenTag: "Donnerstag",
            fächer: ["IT", "Englisch", "Geschichte"]
        },
        {
            wochenTag: "Freitag",
            fächer: ["Mathe", "Sport"]
        }
    ]
}
const packliste = document.getElementById('heutigeMaterialien');
/*const heuteDatum = new Date();
const heuteWochentag = heuteDatum.toLocaleDateString("de-DE", { weekday: "long" });
console.log(heuteWochentag); */

const heuteWochentag = "Montag"

let alleWochentage = daten.stundenplan

let einWochentag = alleWochentage.filter(objekt => objekt.wochenTag === heuteWochentag);
let fächerFürEinenTag = einWochentag.map(tag => tag.fächer).flat()

console.log(fächerFürEinenTag)

//console.log(alleWochentage)

const alleFächer = daten.fächer;
// Filtert alle Fächer, deren Name in der Liste der gewünschten Fächer ('fächerFürEinenTag') enthalten ist.
const fachObjektZumFach = alleFächer.filter(fach =>
    fächerFürEinenTag.includes(fach.fachname)
)
const materialienZumFach = fachObjektZumFach.map(t => t.materialien).flat()
console.log(materialienZumFach)

packliste.textContent = materialienZumFach;
