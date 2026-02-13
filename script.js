let pressCount = 0;
let gameShown = false;

// Listen for key presses
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "a") {
        pressCount++;

        if (pressCount === 67 && !gameShown) {
            showGame();
        }
    }
});

function showGame() {
    gameShown = true;

    // Clear the page
    document.body.innerHTML = "";

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    // Add floating button
    createFloatingButton();
}

function showMainImage() {
    gameShown = false;
    pressCount = 0;

    document.body.innerHTML = "";

    const img = document.createElement("img");
    img.src = "main.png";
    img.style.width = "100%";
    img.style.height = "100vh";
    img.style.objectFit = "cover";

    document.body.appendChild(img);

    createFloatingButton();
}

function createFloatingButton() {
    const btn = document.createElement("img");
    btn.src = "favicon.png"; // your favicon image
    btn.style.position = "fixed";
    btn.style.bottom = "15px";
    btn.style.right = "15px";
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "9999";

    btn.onclick = showMainImage;

    document.body.appendChild(btn);
}
