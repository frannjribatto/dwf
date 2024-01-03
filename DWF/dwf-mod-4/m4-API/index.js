import { getResults } from "./model.js";
import { shwRslts } from "./view.js";

function main(){
const formEl = document.querySelector(".search-form");
formEl.addEventListener("submit", function(e){
    e.preventDefault()
    const itemSearch = e.target.buscar.value;
    let data = getResults(itemSearch);
    shwRslts(data);
})
}

main();