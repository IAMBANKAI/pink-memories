document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const enterBtn = document.getElementById("enterBtn");
    const musicBtn = document.getElementById("musicBtn");
    const birthdayMusic = document.getElementById("birthdayMusic");
    const giftBox = document.getElementById("giftBox");
    const surprise = document.getElementById("surprise");

    // Open gift screen
    enterBtn.addEventListener("click", function () {
        loader.style.display = "none";
    });

    // Play / Pause music
    musicBtn.addEventListener("click", function () {

        if (birthdayMusic.paused) {

            birthdayMusic.play();

            musicBtn.textContent = "⏸ Pause Our Song";

        } else {

            birthdayMusic.pause();

            musicBtn.textContent = "🎵 Play Our Song";

        }

    });

    // Gift animation
    giftBox.addEventListener("click", function () {

        giftBox.textContent = "❤️";

        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    });

    // Photo viewer
    const photos = document.querySelectorAll(".photo");

    photos.forEach(function(photo){

        photo.addEventListener("click", function(){

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
            overlay.style.zIndex = "99999";

            const img = document.createElement("img");

            img.src = this.src;
            img.style.maxWidth = "90%";
            img.style.maxHeight = "90%";
            img.style.borderRadius = "20px";

            overlay.appendChild(img);

            overlay.onclick = function(){
                overlay.remove();
            };

            document.body.appendChild(overlay);

        });

    });

});
