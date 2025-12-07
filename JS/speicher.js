const STORAGE_KEY = "schulDaten";

export function speichereDaten(daten) {
    try {
        const jsonDaten = JSON.stringify(daten);
        localStorage.setItem(STORAGE_KEY, jsonDaten)
    } catch (error) {
        console.error("Fehler beim Speichern:", error);
    }
}

export function ladeDaten() {
    try {
        const jsonDaten = localStorage.getItem(STORAGE_KEY);
        if (jsonDaten) {
            return JSON.parse(jsonDaten);
        }
    } catch (error) {
        console.log("Fehler beim laden:", error);
    }
    return null;
}