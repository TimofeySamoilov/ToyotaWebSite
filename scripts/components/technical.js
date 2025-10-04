// Переключение между поколениями в разделе характеристик
document.addEventListener('DOMContentLoaded', function() {
    console.log('Technical.js загружен!');
    
    const specButtons = document.querySelectorAll('.spec-btn');
    const genSpecs = document.querySelectorAll('.gen-specs');
    
    console.log('Найдено кнопок:', specButtons.length);
    console.log('Найдено блоков характеристик:', genSpecs.length);
    
    // Функция для скрытия всех блоков кроме указанного
    function showOnlyOneGeneration(genIdToShow) {
        genSpecs.forEach(spec => {
            if (spec.id === genIdToShow + '-specs') {
                spec.style.display = 'block';
                spec.classList.add('active');
            } else {
                spec.style.display = 'none';
                spec.classList.remove('active');
            }
        });
    }
    
    // Функция переключения поколения
    function switchGeneration(genId) {
        console.log('Переключаем на поколение:', genId);
        
        // Обновляем активные кнопки
        specButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-gen="${genId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Показываем только выбранное поколение
        showOnlyOneGeneration(genId);
    }
    
    // Обработчики событий для кнопок
    specButtons.forEach(button => {
        button.addEventListener('click', function() {
            const genId = this.getAttribute('data-gen');
            console.log('Клик по кнопке:', this.textContent, 'genId:', genId);
            switchGeneration(genId);
        });
    });
    
    // Изначально показываем только первое поколение
    showOnlyOneGeneration('a40');
    
    console.log('Инициализация завершена');
});