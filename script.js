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
        for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.innerHTML=["🎉","💖","🌸","💕"][Math.floor(Math.random()*4)];

confetti.style.left=Math.random()*100+"vw";

confetti.style.fontSize=(10+Math.random()*18)+"px";

confetti.style.animationDuration=(2+Math.random()*3)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},5000);

}

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
setInterval(() => {

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💖","💕","❤️","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},500);

setInterval(() => {

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(16+Math.random()*18)+"px";

petal.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

},700);
setInterval(() => {

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=Math.random()*100+"vw";
sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=(10+Math.random()*18)+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

},400);
