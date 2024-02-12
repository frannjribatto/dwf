import {form} from "./components/form/contact.ts"

export function main(){
    const containerEl = document.querySelector(".container");
    form(containerEl);
}

main();