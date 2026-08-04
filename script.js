document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            // Create overlay
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
            overlay.style.cursor = "pointer";

            // Create large image
            const bigImage = document.createElement("img");
            bigImage.src = img.src;
            bigImage.alt = img.alt || "Memory";
            bigImage.style.maxWidth = "90%";
            bigImage.style.maxHeight = "90%";
            bigImage.style.borderRadius = "20px";
            bigImage.style.boxShadow = "0 0 30px rgba(255,255,255,0.3)";
            bigImage.style.objectFit = "contain";

            overlay.appendChild(bigImage);
            document.body.appendChild(overlay);

            // Prevent body scroll while lightbox is open
            document.body.style.overflow = "hidden";

            // Close function
            const closeLightbox = () => {
                overlay.remove();
                document.body.style.overflow = "";
                document.removeEventListener("keydown", handleEsc);
            };

            // Close on overlay click
            overlay.addEventListener("click", closeLightbox);

            // Close on Escape key
            const handleEsc = (e) => {
                if (e.key === "Escape") {
                    closeLightbox();
                }
            };
            document.addEventListener("keydown", handleEsc);

        });

    });

});
