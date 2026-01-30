export function clearContent(content) {
    content.innerHTML = "";
    content.className = "";
}

export function fadeTransition(content, renderCallback) {
    content.classList.add('fade-out');
    
    setTimeout(() => {
        renderCallback();
        content.classList.remove('fade-out');
        window.scrollTo(0, 0);
    }, 500);
}