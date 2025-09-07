// Função para ajustar a altura do conteúdo
function adjustContentHeight() {
    const videoHeight = document.querySelector('.video-container').offsetHeight;
    const demoContainer = document.querySelector('.demo-container');
    
    // Ajusta a altura máxima da demonstração com base no vídeo
    demoContainer.style.maxHeight = Math.min(videoHeight + 100, window.innerHeight - 200) + 'px';
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
