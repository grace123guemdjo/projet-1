document.addEventListener('DOMContentLoaded', () => {

    console.log("Page Care.com Clone chargée et prête !");

    // Message de démonstration pour les boutons
    const showAlert = (message) => {
        alert(message);
    };

    // Bouton de recherche
    const searchForm = document.querySelector('.zip-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            const zipCode = searchForm.querySelector('input').value;
            if(zipCode) {
                showAlert(`Recherche lancée pour le code postal : ${zipCode}\n(Fonctionnalité de démonstration)`);
            } else {
                showAlert('Veuillez entrer un code postal.');
            }
        });
    }

    // Boutons "Join now" et "Learn more"
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showAlert('Action de démonstration : Ouverture de la page d\'inscription ou d\'information.');
        });
    });
    
    // Cartes de service cliquables
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.querySelector('h3').innerText;
            showAlert(`Vous avez cliqué sur la catégorie : ${serviceName}\n(Fonctionnalité de démonstration)`);
        });
    });

});