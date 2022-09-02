import { makeButton, makeSection, makeIcon } from "./components/makeElements.js";

const sections = ["topSection", "resultSection", "buttonSection"]

const icons = [
    {cls: "history", source: "img/Time.svg" },
    {cls: "palette", source: "img/Palette.svg" },
]

const buttons = [
    {text: "+", cls: "operator"},
    {text: "-", cls: "operator"},
    {text: "x", cls: "operator"},
    {text: "÷", cls: "operator"},
    {text: "7", cls: "num"},
    {text: "8", cls: "num"},
    {text: "9", cls: "num"},
    {text: "AC", cls: "num"},
    {text: "4", cls: "num"},
    {text: "5", cls: "num"},
    {text: "6", cls: "num"},
    {text: "C", cls: "num"},
    {text: "1", cls: "num"},
    {text: "2", cls: "num"},
    {text: "3", cls: "num"},
    {text: "%", cls: "operator"},
    {text: "0", cls: "zero"},
    {text: ",", cls: "num"},
    {text: "=", cls: "operator"},
]


sections.map((s) => {
    makeSection(s)
});

icons.map((i) => {
    makeIcon(i);
});

buttons.map((b) => {
    makeButton(b);
});

const numberButtons = document.querySelectorAll('.num')
console.log(numberButtons)

const icon = document.querySelectorAll('img')
console.log(icon[0].className)
