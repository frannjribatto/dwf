export function form(el:any){
    const formEl = document.createElement("div")
    formEl.innerHTML =
`<div class="texto__form">
    <div class="title has-text-white">Contacto</div>
</div>

<div class="container__form">

    <div class="field">
        <label class="label has-text-white" for="text" id="name">Nombre</label>
        <div class="field__name">
        <input class="input" type="text" name="name" id="">
        </div>
    </div>
    <div class="field">
        <label class="label has-text-white" for="text" id="email">Email</label>
        <div class="field__email">
        <input class="input" type="text" name="email" id="">
        </div>
    </div>
    <div class="field">
        <label class="label has-text-white" for="text" id="">Texto</label>
        <div class="field__text">
        <textarea class="textarea" name="text" id="text" cols="30" rows="10"></textarea>
        </div>
    </div>
    <button class="button is-dark">Enviar</button>
    </div>
</div>`
    el.appendChild(formEl)
}