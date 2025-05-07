let t = document.getElementsByClassName("text")[0]

t.style.color = "blue";
t.style.backgroundColor = "black";

let p = document.getElementById("p1")

p.style.fontWeight = "bold";

p.classList.add("text-p");

let img = document.getElementsByTagName("img")[0]

img.src = "./image.png"


let ul = document.querySelector("ul")

ul.classList.add("ul-list");
let li = document.querySelectorAll("li").forEach((curr) => {
    curr.classList.add("li-list")
    curr.innerText = "list"
})

let table = document.querySelector("table")






