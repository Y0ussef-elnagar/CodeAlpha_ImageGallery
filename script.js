const imageContainer = document.querySelector(".images-container");
const btn = document.querySelector("button");
let imageNum = 5;

btn.addEventListener("click", () => {
    addImages();
});

function addImages() {
    for (let index = 0; index < imageNum; index++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200/300?random=${Math.random()}`;

        imageContainer.appendChild(img);
    }
}
