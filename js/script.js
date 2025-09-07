// Função para ajustar a altura do conteúdo
function adjustLayout() {
    const mainContent = document.querySelector('.main-content');
    const twoColumns = document.querySelector('.two-columns');
    const videoContainer = document.querySelector('.video-container');
    const demoContainer = document.querySelector('.demo-container');
    
    if (mainContent && twoColumns && videoContainer && demoContainer) {
        const headerHeight = document.querySelector('.page-header').offsetHeight;
        const availableHeight = window.innerHeight - headerHeight - 60; // 60px de padding
        
        // Ajusta a altura das colunas
        twoColumns.style.minHeight = availableHeight + 'px';
        
        // Ajusta a altura máxima da demonstração
        demoContainer.style.maxHeight = availableHeight + 'px';
    }
}

// Executar quando a página carregar e quando redimensionar
document.addEventListener('DOMContentLoaded', function() {
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
    
    // Abre o submenu de Geometria Euclidiana por padrão
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
