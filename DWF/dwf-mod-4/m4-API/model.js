import {shwRslts} from "./view.js"

export function getResults(itemSearch) {
    const dataProcessed = fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + itemSearch)
        .then((r) => r.json())
        .then((d) => {
            shwRslts(d.results)
        });

    return dataProcessed;
}

