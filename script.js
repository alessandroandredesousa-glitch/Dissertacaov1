function toggleSubmenu(id) {
    if (event) event.preventDefault();
    const submenu = document.getElementById(id + '-submenu');
    if (submenu) {
        submenu.classList.toggle('show');
    }
}

function loadPage(pageId) {
    if (event) event.preventDefault();
    
    console.log('🔄 Carregando página:', pageId);
    
    if (typeof PAGES_DATA === 'undefined') {
        alert('ERRO: Dados não carregados. Recarregue a página.');
        return;
    }
    
    const pageData = PAGES_DATA[pageId];
    
    if (!pageData) {
        alert('Página não encontrada: ' + pageId);
        return;
    }
    
    console.log('✅ Carregando:', pageData.title);
    
    const mainContent = document.getElementById('main-content');
    
    let html = '<div class="page-header"><h1>' + pageData.title + '</h1><div class="divider"></div><p>' + pageData.description + '</p></div><div class="two-columns">';
    
    if (pageData.videoId) {
        html += '<div class="video-column"><div class="video-container"><div class="video-wrapper">';
        html += '<iframe src="https://www.youtube.com/embed/' + pageData.videoId + '?vq=hd1080&hd=1&modestbranding=1&rel=0&controls=1&fs=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        html += '</div></div>';
        html += '<div class="video-details"><h3>Detalhes do Vídeo</h3><p><strong>Duração:</strong> ' + pageData.videoDuration + '</p><p><strong>Gravação:</strong> ' + pageData.videoDate + '</p><p><strong>Conteúdo:</strong> ' + pageData.videoDescription + '</p></div></div>';
    }
    
    html += '<div class="demo-column"><div class="demo-container"><h2>Demonstração</h2>' + pageData.content + '</div></div></div>';
    
    mainContent.innerHTML = html;
    
    if (window.MathJax) {
        MathJax.typesetPromise([mainContent]).catch(function(err) {
            console.log('Erro MathJax:', err);
        });
    }
    
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    const euclidiana = document.getElementById('euclidiana-submenu');
    if (euclidiana) {
        euclidiana.classList.add('show');
    }
    
    loadPage('pitagoras');
    
    console.log('✅ Site carregado! Total de páginas:', Object.keys(PAGES_DATA).length);
});