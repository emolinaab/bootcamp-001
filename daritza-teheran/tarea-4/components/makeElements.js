const root = document.getElementById("root");

export function makeSection(props) {
    const section = document.createElement("section");
    section.setAttribute("id", props);
    root.appendChild(section);
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
    img.classList.add(props.cls);
    img.setAttribute("src", props.source);
    const parent = document.getElementById("topSection");
    parent.appendChild(img);
}
