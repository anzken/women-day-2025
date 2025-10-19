// Hiển thị cánh hoa rơi
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = Math.random();
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 500);

// Tự động chuyển trang
setTimeout(() => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page2").style.justifyContent = "center";
    document.getElementById("page2").style.alignItems = "center";
}, 3000);

// Hiệu ứng mở thư
function openLetter() {
    document.getElementById("flap").style.transform = "rotateX(180deg)";
    setTimeout(() => {
        document.getElementById("page2").style.display = "none";
        document.getElementById("messageBox").style.display = "block";

        // 🎵 Phát nhạc nền
        const music = document.getElementById("bgMusic");
        music.play().catch(() => {
            console.log("Tự động phát nhạc bị chặn, người dùng cần nhấn tương tác trước.");
        });

        // 🌸 Tăng hiệu ứng hoa rơi (rơi nhiều và to hơn)
        setInterval(() => {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            petal.style.left = Math.random() * window.innerWidth + "px";
            petal.style.animationDuration = (3 + Math.random() * 4) + "s";
            petal.style.opacity = Math.random();
            petal.style.width = (10 + Math.random() * 10) + "px";
            petal.style.height = petal.style.width;
            petal.style.background = "rgba(255,105,180,0.9)";
            document.body.appendChild(petal);
            setTimeout(() => petal.remove(), 8000);
        }, 500);
    }, 1000);
}