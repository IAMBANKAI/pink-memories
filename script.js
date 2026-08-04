document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        img.addEventListener("click", () => {

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

            const bigImage = document.createElement("img");

            bigImage.src = img.src;
            bigImage.style.maxWidth = "90%";
            bigImage.style.maxHeight = "90%";
            bigImage.style.borderRadius = "20px";
            bigImage.style.boxShadow = "0 0 30px white";

            overlay.appendChild(bigImage);

            overlay.addEventListener("click", () => {
                overlay.remove();
            });

            document.body.appendChild(overlay);

        });

    });

});
