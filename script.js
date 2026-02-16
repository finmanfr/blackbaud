let aPressed = false;
let bPressed = false;
let nPressed = false;

let gameShown = false;

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === "a") aPressed = true;
    if (key === "b") bPressed = true;
    if (key === "n") nPressed = true;

    // A + B → original game
    if (aPressed && bPressed && !gameShown) {
        showGame("https://game316009.konggames.com/gamez/0031/6009/live/index.html");
    }

    // N + B → Basketball GM
    if (nPressed && bPressed && !gameShown) {
        showGame("https://basketball-gm.com");
    }
});

document.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();

    if (key === "a") aPressed = false;
    if (key === "b") bPressed = false;
    if (key === "n") nPressed = false;
});

function showGame(url) {
    gameShown = true;
    document.body.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";

    document.body.appendChild(iframe);
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
