// 1. Aquí pones la URL larga que te dio Google Sheets (formato CSV)
const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpQTtaOeCeWLxpyb6xr-0Jr26yCKt49Qdxq3-i7f4TWRsdATKkhvp5r9lyGTwta5nX73AjxUSHMW_y/pub?gid=0&single=true&output=csv';

// 2. Esta parte le dice a la librería PapaParse: "Ve a internet, descarga ese archivo y cuando termines, ejecutas la función de abajo"
Papa.parse(urlCSV, {
    download: true,
    header: true, 
    complete: function(results) {
        // 'results.data' es el array que viene del Excel
        const puntosDeAcopio = results.data;
        
        // Llamamos a la función que dibuja las tarjetas, pasándole los datos reales
        renderizarPuntos(puntosDeAcopio);
    }
});

// 3. Esta es tu máquina de dibujar (no la borres, solo asegúrate de que esté debajo)
function renderizarPuntos(lista) {
    const contenedor = document.getElementById('contenedor-acopios');
    contenedor.innerHTML = ''; 

    lista.forEach(function(punto) {
        contenedor.innerHTML += `
            <div class="tarjeta-acopio">
                <h3>📍 ${punto.zona}</h3>
                <p>🏠 ${punto.direccion}</p>
                <div class="contacto-box">
                    <p>📞 WhatsApp: ${punto.whatsapp}</p>
                    <a href="https://wa.me/${punto.whatsapp}" target="_blank" class="btn-whatsapp">
                        Contactar por WhatsApp
                    </a>
                </div>
            </div>
        `;
    });
}