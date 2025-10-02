document.addEventListener('DOMContentLoaded', function() {
    const factButton = document.getElementById('fact-button');
    const factModal = document.getElementById('fact-modal');
    const factText = document.getElementById('fact-text');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeFactBtn = document.getElementById('close-fact');
    const anotherFactBtn = document.getElementById('another-fact');
    const facts = [
        "Toyota Supra впервые появилась в 1978 году!",
        "Легендарный двигатель 2JZ-GTE может выдерживать до 1000 л.с.!",
        "Supra стала знаменитой благодаря фильму 'Форсаж'!",
        "Всего было 5 поколений Toyota Supra!",
        "Supra MK4 разгонялась до 100 км/ч за 4.6 секунды!",
        "Оригинальная Supra MK4 имела 320 лошадиных сил!",
        "Toyota выпустила всего 11 000 Supra четвертого поколения!",
        "Supra получила прозвище 'Цапля' из-за поднимающихся фар!",
        "В 2020 году Supra вернулась после 17-летнего перерыва!",
        "Новая Supra разрабатывалась совместно с BMW!"
    ];
    
    // factButton.addEventListener('click', function() {
    //     const randomIndex = Math.floor(Math.random() * facts.length);
    //     const randomFact = facts[randomIndex];
    //     alert(randomFact);
    // }
    // );

    function showRandomFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const randomFact = facts[randomIndex];
        factText.textContent = randomFact;
        factModal.style.display = 'block';
        factModal.style.animation = 'fadeInUp 0.3s ease-out';
    }

    function closeModal() {
        factModal.style.animation = 'fadeInUp 0.3s ease-out reverse';
        setTimeout(() => {
            factModal.style.display = 'none';
        }, 300);
    }

    if (factButton) {
        factButton.addEventListener('click', showRandomFact);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (closeFactBtn) {
        closeFactBtn.addEventListener('click', closeModal);
    }

    if (anotherFactBtn) {
        anotherFactBtn.addEventListener('click', showRandomFact);
    }

    window.addEventListener('click', function(event) {
        if (event.target === factModal) {
            closeModal();
        }
    });


} );