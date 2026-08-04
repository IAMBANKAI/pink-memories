document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }

    const images = document.querySelectorAll(".gallery-grid img");

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

            const image = document.createElement("img");

            image.src = img.src;
            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";
            image.style.borderRadius = "20px";

            overlay.appendChild(image);

            overlay.addEventListener("click", () => {
                overlay.remove();
            });

            document.body.appendChild(overlay);
        });
    });

});
