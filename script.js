document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("images-container");
  const imageList = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
  ];

  imageList.forEach((img) => {
    const image = document.createElement("img");
    image.src = `images/${img}`;
    image.alt = "Memory Photo";
    container.appendChild(image);
  });
});