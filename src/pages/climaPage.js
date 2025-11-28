export function createClimaPage() {
    const container = document.createElement('div');
    container.className = 'clima-page';

    const title = document.createElement('h2');
    title.textContent = 'Clima Page';
    title.className = 'clima-title';

    const description = document.createElement('p');
    description.textContent = 'Aquí puedes consultar el clima actual y las previsiones meteorológicas.';
    description.className = 'clima-description';

    container.appendChild(title);
    container.appendChild(description);

    return container;
}