
function shwRsltsCount(res) {
    const countEl = document.querySelector(".results-count");
    countEl.textContent = res
}

export function rmRslts(){
    
}

export function shwRslts(res) {
    shwRsltsCount(res.length)

    const template = document.querySelector("#temp-card");
    const contentEl = document.querySelector(".result-search")
    contentEl.textContent = "" 
    const templateNav = template.content

    for (const results of res){

        console.log(results)

        const nameEl = templateNav.querySelector(".result-item-title") 
        nameEl.textContent = results.title
    
        const priceEl = templateNav.querySelector(".result-item-price")
        priceEl.textContent = "$" + results.price
    
        const statusEl = templateNav.querySelector(".result-item-status")
        statusEl.textContent = results.condition
    
        const imgEl = templateNav.querySelector(".result-item-img")
        imgEl.src = results.thumbnail

        let clone = document.importNode(templateNav, true);
        contentEl.appendChild(clone)
    }

}

