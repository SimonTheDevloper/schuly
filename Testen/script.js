const daten = {
    fächer: [
        {
            fachname: "Mathe",
            materialien: ["Mathebuch", "Theorieheft", "Übungsheft", "Taschenrechner", "Formelsammlung", "Zirkel",]
        },
        {
            fachname: "Englisch",
            materialien: ["Englischbuch", "Übungsheft"]
        },
        {
            fachname: "IT",
            materialien: ["IT-Buch", "USB-Stick"]
        }
    ],
    stundenplan: [
        {
            WochenTag: "Montag",
            fächer: ["Mathe", "Englisch"]
        },
        {
            WochenTag: "Dienstag",
            fächer: ["IT", "Englisch"]
        },
    ]
}

const heuteDatum = new Date();
const heuteWochentag = heuteDatum.toLocaleDateString("de-DE", { weekday: "long" });
//console.log(heuteWochentag);


let alleWochentage = daten.stundenplan

let einWochentag = alleWochentage.filter(objekt => objekt.WochenTag === heuteWochentag);
let fächerFürEinenTag = einWochentag.map(tag => tag.fächer).flat()

console.log(fächerFürEinenTag)

//console.log(alleWochentage)


const alleFächer = daten.fächer; console.log()

// Filtert alle Fächer, deren Name in der Liste der gewünschten Fächer ('fächerFürEinenTag') enthalten ist.
const fachObjektZumFach = alleFächer.filter(fach =>
    fächerFürEinenTag.includes(fach.fachname)
)
const materialienZumFach = fachObjektZumFach.map(t => t.materialien).flat()
console.log(materialienZumFach)



