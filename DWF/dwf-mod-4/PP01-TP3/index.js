import { addOpenWindw } from "./model";

function main() {
    let arrTask = []
    const plusBttn = document.querySelector(".button-trigger");

    plusBttn.addEventListener("click", function (e){
        e.preventDefault();
        plusBttn.classList.add("button-trigger--off");
        addOpenWindw(arrTask);
    })
}

main();