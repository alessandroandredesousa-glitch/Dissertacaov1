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

// Funções de controle do vídeo
function togglePlay() {
    const iframe = document.querySelector('iframe');
    const iframeSrc = iframe.src;
    
    // Verifica se o iframe já tem parâmetros de consulta
    if (iframeSrc.includes('?')) {
        if (iframeSrc.includes('autoplay=1')) {
            iframe.src = iframeSrc.replace('autoplay=1', 'autoplay=0');
        } else if (iframeSrc.includes('autoplay=0')) {
            iframe.src = iframeSrc.replace('autoplay=0', 'autoplay=1');
        } else {
            iframe.src = iframeSrc + '&autoplay=1';
        }
    } else {
        iframe.src = iframeSrc + '?autoplay=1';
    }
}

function toggleFullscreen() {
    const iframe = document.querySelector('iframe');
    
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// Função para carregar conteúdo dinamicamente (opcional)
function loadContent(page) {
    // Esta função pode ser usada para carregar conteúdo sem recarregar a página toda
    console.log('Carregando conteúdo: ' + page);
    // Implementação específica vai depender da sua necessidade
}
