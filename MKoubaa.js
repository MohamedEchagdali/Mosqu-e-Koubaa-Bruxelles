document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const links = document.querySelectorAll('nav ul li a');
    const registerBtn = document.getElementById('register-btn');
    const donateBtn = document.getElementById('donation-form');
    const classRegistrationContainer = document.getElementById('class-registration-container');
    let formVisible = false;
    let donationVisible = false;

    // Smooth scroll to sections
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle class registration form
    registerBtn.addEventListener('click', () => {
        if (!formVisible) {
            classRegistrationContainer.innerHTML = `
                <div id="class-registration-form">
                <h2>Demande d'inscription</h2>
                    <form>
                        <label for="name">Nom:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="age">Âge:</label>
                        <input type="number" id="age" name="age" required>
                        <label for="niveau">Niveau:</label>
                        <select name="niveau" id="niveau" required>
                            <option value="" selected>Choisir le niveau</option>
                            <option value="1°">Première année</option>
                            <option value="2°">Deuxième année</option>
                            <option value="3°">Troisième année</option>
                            <option value="4°">Quatrième année</option>
                            <option value="5°">Cinquième année</option>
                        </select>
                        <button type="submit">Envoyer la demande</button>
                        <button type="button" id="close-registration">Fermer</button>
                    </form>
                </div>
            `;

            const classRegistrationForm = document.getElementById('class-registration-form');
            const closeRegistrationBtn = document.getElementById('close-registration');

            classRegistrationForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Merci de vous être inscrit à nos cours d\'arabe!');
                classRegistrationContainer.innerHTML = '';
                formVisible = false;
            });

            closeRegistrationBtn.addEventListener('click', () => {
                classRegistrationContainer.innerHTML = '';
                formVisible = false;
            });

            formVisible = true;
        }
    });

    // Toggle donation info
    donateBtn.addEventListener('click', () => {
        if (!donationVisible) {
            const aboutSection = document.getElementById('about');
            aboutSection.insertAdjacentHTML('beforeend', `
                <div id="donation-info">
                    <p>Compte: BE99 8633 2566 6988</p>
                    <button id="close-donation">Fermer</button>
                </div>
            `);

            const closeDonationBtn = document.getElementById('close-donation');
            closeDonationBtn.addEventListener('click', () => {
                const donationInfo = document.getElementById('donation-info');
                donationInfo.remove();
                donationVisible = false;
            });

            donationVisible = true;

            
        }
    });

    // Handle form submissions
    const donationForm = document.getElementById('donation-form');
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre don!');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre message! Nous vous contacterons bientôt.');
    });

    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            alert('Image cliquée!');
        });
    });
});

//Scroll button image

window.onload = function() {
    document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);
    document.querySelector('.scroll-button.right').addEventListener('click', scrollRight);
};

function scrollLeft() {
    const container = document.querySelector('.album');
    if (container) {
        container.scrollBy({
            left: -container.clientWidth / 2,
            behavior: 'smooth'
        });
    }
}

function scrollRight() {
    const container = document.querySelector('.album');
    if (container) {
        container.scrollBy({
            left: container.clientWidth / 2,
            behavior: 'smooth'
        });
    }
}

