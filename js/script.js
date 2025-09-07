// Função para alternar submenus
function toggleSubmenu(id) {
    event.preventDefault();
    const submenu = document.getElementById(id + '-submenu');
    submenu.classList.toggle('show');
}

// Inicializar submenus abertos para a demonstração
document.addEventListener('DOMContentLoaded', function() {
    // Abre o submenu de Geometria Euclidiana por padrão
    const euclidianaSubmenu = document.getElementById('euclidiana-submenu');
    if (euclidianaSubmenu) {
        euclidianaSubmenu.classList.add('show');
    }
    
    // Adicione aqui qualquer outro código de inicialização
    console.log('Site de demonstrações matemáticas carregado!');
});

// Função para carregar conteúdo dinamicamente (opcional)
function loadContent(page) {
    // Esta função pode ser usada para carregar conteúdo sem recarregar a página toda
    console.log('Carregando conteúdo: ' + page);
    // Implementação específica vai depender da sua necessidade
}
