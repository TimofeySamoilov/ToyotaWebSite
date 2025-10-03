function animateStats() {
                const statNumbers = document.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current) + (target > 100 ? '+' : '');
                    }, 16);
                });
            }

           
            const quotes = document.querySelectorAll('.quote-item');
            const dotsContainer = document.querySelector('.slider-dots');
            let currentSlide = 0;

            
            quotes.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });

            function goToSlide(n) {
                quotes[currentSlide].classList.remove('active');
                document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');
                
                currentSlide = n;
                quotes[currentSlide].classList.add('active');
                document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
            }

            document.querySelector('.next').addEventListener('click', () => {
                goToSlide((currentSlide + 1) % quotes.length);
            });

            document.querySelector('.prev').addEventListener('click', () => {
                goToSlide((currentSlide - 1 + quotes.length) % quotes.length);
            });

            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(document.querySelector('.stats-section'));

           
            document.querySelectorAll('.gallery-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const category = e.target.closest('.gallery-item').dataset.category;
                    alert(`Подробнее о Supra в категории: ${category}`);
                });
            });