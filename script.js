function analizzaEmail() {

    const testo = document.getElementById("emailInput").value;

    // HOTEL
    let hotel = "";
    const hotelMatch = testo.match(/NH\s+[A-Za-zÀ-ÿ ]+/i);

    if (hotelMatch) {
        hotel = hotelMatch[0].trim();
    }

    document.getElementById("hotel").value = hotel;

    // DATE
    const date = testo.match(/\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}/g);

    if (date && date.length >= 2) {
        document.getElementById("checkin").value = date[0];
        document.getElementById("checkout").value = date[1];
    }

    // NOME CLIENTE
    let nome = "";

    const nomeMatch = testo.match(/Sig\.?\s+([A-Za-zÀ-ÿ ]+)/i);

    if (nomeMatch) {
        nome = nomeMatch[1].trim();
    }

    document.getElementById("cliente").value = nome;

}