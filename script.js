document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");

enterBtn.addEventListener("click", () => {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    },800);
});

giftBox.addEventListener("click", () => {
    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior:"smooth"
    });

    giftBox.textContent="❤️";
});

const photos=document.querySelectorAll(".photo");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

const img=document.createElement("img");

img.src=photo.src;
img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="20px";
img.style.boxShadow="0 0 40px white";

overlay.appendChild(img);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

});
