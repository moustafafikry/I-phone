let img = document.querySelector('.img');
let container = document.querySelector('.container-one');

function phones(phone){
    img.src = phone;
}
function colors(color){
    container.style.background = color;
}

let toggle = document.querySelector(".toggle i");

toggle.onclick = function () {
    
    let links = document.querySelector(".links");
    toggle.classList.toggle('active');

    if (toggle.classList.contains('active')) {
        

        links.classList.remove("none");

    } else {

        links.classList.add("none");

    }

    
}

