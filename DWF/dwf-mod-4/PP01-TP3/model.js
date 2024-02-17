class Task {
    date
    task
    
    constructor(value) {
        this.date = new Date
        this.task = value
    }


}


export function addOpenWindw(arrTask){
    let idx = 0
    const plusBttn = document.querySelector(".button-trigger");
    const modal = document.querySelector(".modal--off");
    modal.classList.remove("modal--off")
    
    const txtArea = document.getElementsByName("modal-data__textarea");
    
    const writeEl = document.querySelector(".button-modal");
    
    writeEl.addEventListener("click", function(e){
        idx++
        e.preventDefault()
        // const dataLocalStorage = JSON.parse(localStorage.getItem('arrTask'));
        // console.log('DLS', dataLocalStorage);
        // let arrTask = [];

        let value = txtArea[0].value;
        let task = new Task(value);
        
        // if(dataLocalStorage == null) {
        //     arrTask.push(task);
        // } else {
        //     arrTask = dataLocalStorage[0];
        //     arrTask.push(task)
        // }
        // console.log(localStorage)
        // arrTask.push(task);
        // console.log(arrTask)

        
        // localStorage.setItem('arrTask', JSON.stringify(arrTask));
        // console.log('LS', localStorage)
        arrTask.push(task)
        console.log('tasks', arrTask)
        console.log('vueltas', idx)

        modal.classList.add("modal--off")
        plusBttn?.classList.remove("button-trigger--off")
        
    })
}