// Função para ajustar a altura do conteúdo
function adjustContentHeight() {
    const videoContainer = document.querySelector('.video-container');
    const demoContainer = document.querySelector('.demo-container');
    
    if (videoContainer && demoContainer) {
        // Ajusta a altura máxima da demonstração com base no vídeo
        const videoHeight = videoContainer.offsetHeight;
        demoContainer.style.maxHeight = videoHeight + 'px';
    }
}

// Executar quando a página carregar e quando redimensionar
document.addEventListener('DOMContentLoaded', function() {
    adjustContentHeight();
    window.addEventListener('resize', adjustContentHeight);
    
    // Restante do código de inicialização...
    const euclidianaSubmenu = document.getElementById('euclidiana-submenu');
    if (euclidianaSubmenu) {
        euclidianaSubmenu.classList.add('show');
    }
    
    console.log('Site de demonstrações matemáticas carregado!');
});

// Função para alternar submenus
function toggleSubmenu(id) {
    event.preventDefault();
    const submenu = document.getElementById(id + '-submenu');
    submenu.classList.toggle('show');
}
