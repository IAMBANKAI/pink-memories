document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(function (img) {

        img.addEventListener("click", function () {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,0.9)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "9999";

            const big = document.createElement("img");

            big.src = this.src;
            big.style.maxWidth = "90%";
            big.style.maxHeight = "90%";
            big.style.borderRadius = "20px";
            big.style.boxShadow = "0 0 25px white";

            overlay.appendChild(big);

            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });

            document.body.appendChild(overlay);

        });

    });

});
