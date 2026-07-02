window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.transition = "opacity 0.8s ease";
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 800);

    }

});
const worlds = document.querySelectorAll(".world-card");

const popup = document.getElementById("world-popup");

const closeBtn = document.querySelector(".close-popup");

worlds.forEach(world => {

    world.style.cursor = "pointer";

    world.addEventListener("click", () => {

        popup.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
