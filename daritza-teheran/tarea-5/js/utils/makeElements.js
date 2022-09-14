const root = document.getElementById("root");

export function makeSection(props) {
    const section = document.createElement("section");
    section.setAttribute("id", props);
    root.appendChild(section);
}
export function makeButton(element) {
    const parent = document.getElementById("buttons");
    const btn = document.createElement("button");
    btn.setAttribute("id", element.name);
    btn.innerHTML = element.name;
    btn.setAttribute('value', element.value)
    parent.appendChild(btn);
}
export function makeCanvas() {
    const content = document.getElementById("content");
    const c = document.createElement("canvas");
    c.setAttribute("id", "canvas");
    content.appendChild(c);
}
  
  

