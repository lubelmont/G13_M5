export function createHeader(text) {
    const header = document.createElement('h1');
    header.textContent = text;
    header.className = 'main-header';
    return header;
}
