// Função para rolar suavemente para uma seção específica
function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adiciona um listener de rolagem para adicionar a classe ao cabeçalho quando rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
