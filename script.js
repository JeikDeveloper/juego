const images = [
    'images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg', 'images/4.jpeg', 'images/5.jpeg', 'images/6.jpeg', 'images/7.jpeg', 'images/8.jpeg', 'images/9.jpeg', 'images/10.jpeg', 'images/11.jpeg', 'images/12.jpeg', 'images/13.jpeg', 'images/14.jpeg', 'images/15.jpeg'
]
let usedImages = [];

function showRandomImage() {
  // Si ya se han mostrado todas las imágenes, evita mostrar otra y notifica
  if (usedImages.length === images.length) {
    alert("Ya se han mostrado todas las imágenes. Reinicia el juego.");
    return;
  }
  
  // Filtra las imágenes no usadas y selecciona una al azar
  let availableImages = images.filter(img => !usedImages.includes(img));
  let randomIndex = Math.floor(Math.random() * availableImages.length);
  let selectedImage = availableImages[randomIndex];
  
  // Muestra la imagen en el contenedor principal
  document.getElementById("random-image").src = selectedImage;
  
  // Añade la imagen a la lista de usadas y a la galería de imágenes mostradas
  usedImages.push(selectedImage);
  addToUsedImages(selectedImage);
}

function addToUsedImages(imageSrc) {
  const usedImagesContainer = document.getElementById("used-images");
  const imgElement = document.createElement("div");
  imgElement.classList.add("used-image");
  imgElement.innerHTML = `<img src="${imageSrc}" alt="Imagen mostrada">`;
  usedImagesContainer.appendChild(imgElement);
}

function resetGame() {
  // Limpia las imágenes mostradas y el contenedor
  usedImages = [];
  document.getElementById("used-images").innerHTML = "";
  document.getElementById("random-image").src = ""; // Limpia la imagen principal
}
