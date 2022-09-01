export let createButtons=(buttons, contenedorbuttons)=>{
    buttons.values.forEach(button => {
        let btn = document.createElement("button")
        btn.textContent= button
        btn.classList.add(buttons.class[0])
        btn.classList.add(buttons.class[1])
        btn.value=button
        btn.setAttribute("type","button")

        contenedorbuttons.appendChild(btn)
    });
}
