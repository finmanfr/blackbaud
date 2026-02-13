let aPressed = false;
let bPressed = false;
let gameShown = false;

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "a") {
        aPressed = true;
    }
    if (event.key.toLowerCase() === "b") {
        bPressed = true;
    }

    // If both are pressed at the same time
    if (aPressed && bPressed && !gameShown) {
        showGame();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key.toLowerCase() === "a") {
        aPressed = false;
    }
    if (event.key.toLowerCase() === "b") {
        bPressed = false;
    }
});

function showGame() {
    gameShown = true;

    document.body.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = "https://game316009.konggames.com/gamez/0031/6009/live/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    createFloatingButton();
}

function showMainImage() {
    gameShown = false;

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
    btn.src = "favicon.png";
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
