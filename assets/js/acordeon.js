
document.querySelectorAll('.acordeon .trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const acordeon = trigger.parentElement; // Pega o elemento pai (.acordeon)
            acordeon.classList.toggle('open'); // Alterna a classe 'open'
        });
    });
