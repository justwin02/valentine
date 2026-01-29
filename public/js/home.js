const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const yesBtn = document.getElementById("yesBtn")

noBtn.addEventListener("mouseover", () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
    window.location.href = "success.html";
})