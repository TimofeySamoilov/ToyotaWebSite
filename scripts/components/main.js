document.addEventListener('DOMContentLoaded', function() {
    const factButton = document.getElementById('fact-button');
    const facts = [
        "Toyota Supra впервые появилась в 1978 году!",
        "Легендарный двигатель 2JZ-GTE может выдерживать до 1000 л.с.!",
        "Supra стала знаменитой благодаря фильму 'Форсаж'!",
        "Всего было 5 поколений Toyota Supra!"
    ];
    factButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const randomFact = facts[randomIndex];
        alert(randomFact);
    }

    );
} );