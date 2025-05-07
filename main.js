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


table.classList.add("table-list");
for (let i = 0; i < 2; i++) {
    let row = table.insertRow()
    row.classList.add("table-list");

    for (let l = 0; l < 3; l++) {
        let col = row.insertCell()
        col.classList.add("table-list");
        col.innerText = `r${i}`
    }
}



