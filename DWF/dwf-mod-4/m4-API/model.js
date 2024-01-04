
export function getResults(itemSearch) {
    const dataProcessed = fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + itemSearch)
        .then((r) => r.json())
        .then((d) => {
            return d.results
        });
    return dataProcessed
}

