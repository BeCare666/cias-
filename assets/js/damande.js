
  document.querySelector('.btn-submit').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('sbject').value;
    const message = document.getElementById('message').value.trim();

    // Vérification de validité
    if (!name || !email || !service || !message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }else{
        setTimeout(() => {
         window.location.href = "index.html"; // Redirection vers la page d'accueil
        }, 1000);
    }

    // Encodage du message pour WhatsApp
    const formattedMessage = 
      `*Demande de service via le site Cameroon Investigations Agency*\n\n` +
      `👤 *Nom :* ${name}\n` +
      `📧 *Email :* ${email}\n` +
      `🛠️ *Service souhaité :* ${service}\n` +
      `📝 *Message :* ${message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);

    // Redirection vers WhatsApp Web
    window.open(`https://wa.me/2290151455930?text=${encodedMessage}`, '_blank');
  });

