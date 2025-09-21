onload = () =>{
    document.body.classList.remove("container");
};

// Crear elemento de audio para el sonido de toque
const touchAudio = new Audio('sound/DF.mp3');
touchAudio.preload = 'auto';

// Función para reproducir sonido
function playTouchSound() {
    touchAudio.play().catch(e => console.log('Error reproduciendo audio:', e));
}

// Función para crear un girasol
function createSunflower(x, y) {
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.style.left = (x - 40) + 'px'; // Centrar el girasol en el punto de toque
    sunflower.style.top = (y - 40) + 'px';
    
    // Crear pétalos
    for (let i = 1; i <= 16; i++) {
        const petal = document.createElement('div');
        petal.className = 'sunflower-petal';
        sunflower.appendChild(petal);
    }
    
    // Crear centro del girasol
    const center = document.createElement('div');
    center.className = 'sunflower-center';
    sunflower.appendChild(center);
    
    // Añadir al body
    document.body.appendChild(sunflower);
    
    // Eliminar después de 2 segundos
    setTimeout(() => {
        if (sunflower.parentNode) {
            sunflower.parentNode.removeChild(sunflower);
        }
    }, 2000);
}

// Event listeners para touch y click
document.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    const touch = e.touches[0];
    playTouchSound(); // Reproducir sonido
    createSunflower(touch.clientX, touch.clientY);
});

document.addEventListener('click', function(e) {
    playTouchSound(); // Reproducir sonido
    createSunflower(e.clientX, e.clientY);
});

// Para dispositivos móviles, también escuchar touchend
document.addEventListener('touchend', function(e) {
    e.preventDefault();
});