document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const enterBtn = document.getElementById("enterBtn");
    const musicBtn = document.getElementById("musicBtn");
    const birthdayMusic = document.getElementById("birthdayMusic");
    const giftBox = document.getElementById("giftBox");
    const surprise = document.getElementById("surprise");
    const hearts = document.getElementById("hearts");
    const petals = document.getElementById("petals");

    // Find both birthday videos
    const birthdayVideos = document.querySelectorAll(".gallery-video");

    // Make the birthday song repeat endlessly
    if (birthdayMusic) {
        birthdayMusic.loop = true;
    }

    // Keep both videos muted and looping
    birthdayVideos.forEach(function (video) {
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.playsInline = true;

        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("loop", "");
    });

    // Attempt to autoplay both videos silently
    function playBirthdayVideos() {
        birthdayVideos.forEach(function (video) {
            video.muted = true;

            video.play().catch(function (error) {
                console.log(
                    "Video autoplay may be restricted by the browser.",
                    error
                );
            });
        });
    }

    // Try autoplay when the page loads
    playBirthdayVideos();

    // Open My Gift: reveal the website and start the song
    if (enterBtn) {
        enterBtn.addEventListener("click", async function () {
            if (loader) {
                loader.style.display = "none";
            }

            // Start A Thousand Years
            if (birthdayMusic) {
                birthdayMusic.loop = true;

                try {
                    await birthdayMusic.play();

                    if (musicBtn) {
                        musicBtn.textContent = "⏸ Pause Our Song";
                    }
                } catch (error) {
                    console.error(
                        "The birthday song could not play:",
                        error
                    );
                }
            }

            // Retry playback for both videos
            playBirthdayVideos();
        });
    }

    // Music button: play or pause the song
    if (musicBtn && birthdayMusic) {
        musicBtn.addEventListener("click", async function () {
            if (birthdayMusic.paused) {
                try {
                    await birthdayMusic.play();
                    musicBtn.textContent = "⏸ Pause Our Song";
                } catch (error) {
                    musicBtn.textContent = "⚠️ Tap to Try Again";

                    console.error(
                        "Music could not play:",
                        error
                    );
                }
            } else {
                birthdayMusic.pause();
                musicBtn.textContent = "🎵 Play Our Song";
            }
        });

        // Keep the music button text updated
        birthdayMusic.addEventListener("play", function () {
            musicBtn.textContent = "⏸ Pause Our Song";
        });

        birthdayMusic.addEventListener("pause", function () {
            musicBtn.textContent = "🎵 Play Our Song";
        });
    }

    // Birthday gift and confetti
    if (giftBox) {
        function openBirthdayGift() {
            if (giftBox.dataset.opened === "true") {
                return;
            }

            giftBox.dataset.opened = "true";
            giftBox.textContent = "❤️";
            giftBox.classList.add("giftOpen");

            // Create birthday confetti
            for (let i = 0; i < 60; i++) {
                const confetti = document.createElement("div");

                confetti.className = "confetti";

                confetti.textContent = [
                    "🎉",
                    "💖",
                    "🌸",
                    "💕"
                ][Math.floor(Math.random() * 4)];

                confetti.style.left = Math.random() * 100 + "vw";

                confetti.style.fontSize =
                    (10 + Math.random() * 18) + "px";

                confetti.style.animationDuration =
                    (2 + Math.random() * 3) + "s";

                document.body.appendChild(confetti);

                setTimeout(function () {
                    confetti.remove();
                }, 5000);
            }

            // Reveal the birthday surprise
            if (surprise) {
                surprise.style.display = "block";

                surprise.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }

        giftBox.addEventListener("click", openBirthdayGift);

        // Allow keyboard users to open the gift
        giftBox.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openBirthdayGift();
            }
        });
    }

    // Photo viewer: images only
    const photos = document.querySelectorAll(".gallery img.photo");

    photos.forEach(function (photo) {
        photo.addEventListener("click", function () {
            const overlay = document.createElement("div");

            overlay.className = "photo-overlay";

            Object.assign(overlay.style, {
                position: "fixed",
                inset: "0",
                background: "rgba(0,0,0,0.92)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                zIndex: "99999",
                cursor: "zoom-out"
            });

            const enlargedImage = document.createElement("img");

            enlargedImage.src = photo.src;
            enlargedImage.alt = photo.alt || "Jasmine";

            Object.assign(enlargedImage.style, {
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "16px",
                cursor: "default"
            });

            overlay.appendChild(enlargedImage);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });

            enlargedImage.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            document.body.appendChild(overlay);
        });
    });

    // Floating hearts
    if (hearts) {
        setInterval(function () {
            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML = [
                "💖",
                "💕",
                "❤️",
                "💗"
            ][Math.floor(Math.random() * 4)];

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            heart.style.fontSize =
                (18 + Math.random() * 25) + "px";

            hearts.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 8000);
        }, 800);
    }

    // Falling flower petals
    if (petals) {
        setInterval(function () {
            const petal = document.createElement("div");

            petal.className = "petal";
            petal.innerHTML = "🌸";

            petal.style.left = Math.random() * 100 + "vw";

            petal.style.fontSize =
                (16 + Math.random() * 18) + "px";

            petal.style.animationDuration =
                (5 + Math.random() * 5) + "s";

            petals.appendChild(petal);

            setTimeout(function () {
                petal.remove();
            }, 10000);
        }, 1100);

        // Magical sparkles
        setInterval(function () {
            const sparkle = document.createElement("div");

            sparkle.className = "sparkle";
            sparkle.innerHTML = "✨";

            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.top = Math.random() * 100 + "vh";

            sparkle.style.fontSize =
                (10 + Math.random() * 18) + "px";

            petals.appendChild(sparkle);

            setTimeout(function () {
                sparkle.remove();
            }, 2000);
        }, 900);
    }
});
