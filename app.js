// 1. EL CATÁLOGO (Array de Objetos)
// Cada objeto {} representa un punto físico real
const puntosDeAcopio = [
    {
        zona: "Zona Sur - San Miguel",
        direccion: "Calle 21, galería principal",
        whatsapp: "59170000001" // Reemplaza con los números reales
    },
    {
        zona: "Centro - El Prado",
        direccion: "Frente al cine Monje Campero",
        whatsapp: "59170000002"
    },
    {
        zona: "Sopocachi",
        direccion: "Plaza Abaroa, esquina 20 de Octubre",
        whatsapp: "59170000003"
    }
];

// 2. EL PUENTE (Conectamos JS con HTML)
const contenedor = document.getElementById('contenedor-acopios');

// 3. LA CINTA TRANSPORTADORA (.forEach)
puntosDeAcopio.forEach(function(punto) {
    
    // 4. EL MOLDE (Template Literal)
    // Usamos las comillas invertidas (backticks) `` para poder mezclar HTML con variables
    const tarjetaHTML = `
        <div class="tarjeta-acopio">
            <h3>${punto.zona}</h3>
            <p>📍 ${punto.direccion}</p>
            <a href="https://wa.me/${punto.whatsapp}" target="_blank" style="color: #27ae60; font-weight: bold; text-decoration: none;">
                💬 Contactar por WhatsApp
            </a>
        </div>
    `;

    // 5. LA INYECCIÓN
    // Le decimos al contenedor: "Conserva lo que ya tienes adentro, y súmale esta nueva tarjeta"
    contenedor.innerHTML = contenedor.innerHTML + tarjetaHTML;
});