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
    
    // Adicione aqui qualquer outro código de inicialização
    console.log('Site de demonstrações matemáticas carregado!');
    
    // Você pode adicionar interações para os vídeos se necessário
    const videoIframes = document.querySelectorAll('.video-wrapper iframe');
    console.log(`${videoIframes.length} vídeo(s) incorporado(s) do YouTube.`);
});

// Função para carregar conteúdo dinamicamente (opcional)
function loadContent(page) {
    // Esta função pode ser usada para carregar conteúdo sem recarregar a página toda
    console.log('Carregando conteúdo: ' + page);
    // Implementação específica vai depender da sua necessidade
}
