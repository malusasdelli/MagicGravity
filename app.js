document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para o botão do Hero
    const heroBtn = document.querySelector('header .cta-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#comprar');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Ação do botão de compra
    const buyBtn = document.getElementById('btn-comprar');
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            alert('Redirecionando para o checkout seguro da Rocha Chueiri...');
        });
    }
});