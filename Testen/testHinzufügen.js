const daten = {
    fächer: [],
    stundenplan: [
        {
            wochenTag: "Montag",
            fächer: []
        },
        {
            wochenTag: "Dienstag",
            fächer: []
        },
        {
            wochenTag: "Mittwoch",
            fächer: []
        },
        {
            wochenTag: "Donnerstag",
            fächer: []
        },
        {
            wochenTag: "Freitag",
            fächer: []
        }
    ]
}


const ausgewählterTag = "Montag"
const fächerFürTag = ["Mathe", "Geo", "Englisch"]


function fächerHinzufügen(tag, fächer) {
    const richtigerTag = daten.stundenplan.find(t => t.wochenTag === tag);
    console.log(richtigerTag)

    richtigerTag.fächer.push(...fächer);
    //richtigerTag.fächer.push('Mathematik');
}

fächerHinzufügen(ausgewählterTag, fächerFürTag)

console.log(daten.stundenplan)
