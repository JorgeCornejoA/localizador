function actualizarHoraFecha() {
    const ahora = new Date();
    
    // Formateo de hora y fecha
    document.getElementById('hora').textContent = ahora.toLocaleTimeString();
    document.getElementById('fecha').textContent = ahora.toLocaleDateString();
}

// Actualizar la hora y fecha cada segundo
setInterval(actualizarHoraFecha, 1000);
actualizarHoraFecha(); 

// Obtener la ubicación
function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            document.getElementById('ubicacion').textContent = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
        }, () => {
            document.getElementById('ubicacion').textContent = "No se pudo obtener la ubicación.";
        });
    } else {
        document.getElementById('ubicacion').textContent = "Geolocalización no soportada en este navegador.";
    }
}

// Llamar a la función para obtener la ubicación
obtenerUbicacion();
