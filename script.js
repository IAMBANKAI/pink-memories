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
      overlay.style.background = "rgba(0,0,0,0.92)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "9999";
      overlay.style.cursor = "pointer";
      overlay.style.padding = "20px";

      const bigImage = document.createElement("img");
      bigImage.src = img.src;
      bigImage.alt = img.alt || "Memory";
      bigImage.style.maxWidth = "90%";
      bigImage.style.maxHeight = "90%";
      bigImage.style.borderRadius = "16px";
      bigImage.style.boxShadow = "0 0 40px rgba(255,255,255,0.25)";
      bigImage.style.objectFit = "contain";

      overlay.appendChild(bigImage);
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";

      const closeLightbox = () => {
        overlay.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEsc);
      };

      overlay.addEventListener("click", closeLightbox);

      const handleEsc = (e) => {
        if (e.key === "Escape") closeLightbox();
      };
      document.addEventListener("keydown", handleEsc);
    });
  });
});
