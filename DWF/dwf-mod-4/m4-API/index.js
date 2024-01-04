import { getResults } from "./model.js";
import { shwRslts } from "./view.js";

function main(){
const formEl = document.querySelector(".search-form");
formEl.addEventListener("submit", function(e){
    e.preventDefault()
    const itemSearch = e.target.buscar.value;
    
    getResults(itemSearch).then((result) => {shwRslts(result)});
    
})
}

main();