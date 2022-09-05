const root = document.getElementById("root");

export function makeSection(props) {
    const section = document.createElement("section");
    section.setAttribute("id", props);
    root.appendChild(section);
}
export function makeDiv(props) {
    const div = document.createElement("div");
    div.setAttribute("id", props);
    const parent = document.getElementById("resultSection");
    parent.appendChild(div);
}

export function makeButton(props) {
    const button = document.createElement("button");
    button.innerText = props.text;
    button.classList.add(props.cls);
    const parent = document.getElementById("buttonSection");
    parent.appendChild(button);
}

export function makeIcon(props) {
    const img = document.createElement("img");
    img.setAttribute("id", props.cls);
    img.setAttribute("src", props.source);
    const parent = document.getElementById("topSection");
    parent.appendChild(img);
}
