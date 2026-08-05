document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

enterBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    },800);

});

musicBtn.addEventListener("click", () => {

    if(birthdayMusic.paused){

        birthdayMusic.play();

        musicBtn.innerHTML="⏸ Pause Our Song";

    }else{

        birthdayMusic.pause();

        musicBtn.innerHTML="🎵 Play Our Song";

    }

});

giftBox.addEventListener("click",()=>{

giftBox.classList.add("giftOpen");

giftBox.innerHTML="❤️";

surprise.style.display="block";

surprise.scrollIntoView({
behavior:"smooth"
});

setTimeout(()=>{
giftBox.classList.remove("giftOpen");
},800);

});
