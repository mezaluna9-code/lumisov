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
