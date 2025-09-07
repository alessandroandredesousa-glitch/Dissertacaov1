// Função para alternar submenus
function toggleSubmenu(id) {
    event.preventDefault();
    const submenu = document.getElementById(id + '-submenu');
    submenu.classList.toggle('show');
}

// Inicializar quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Abre o submenu de Geometria Euclidiana por padrão
    const euclidianaSubmenu = document.getElementById('euclidiana-submenu');
    if (euclidianaSubmenu) {
        euclidianaSubmenu.classList.add('show');
    }
    
    console.log('Site de demonstrações matemáticas carregado!');
});

// Função para carregar conteúdo dinamicamente (opcional)
function loadContent(page) {
    console.log('Carregando conteúdo: ' + page);
    // Implementação específica vai depender da sua necessidade
}
