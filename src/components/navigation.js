export function createNavigation(onNavigate) {

    const nav = document.createElement('nav');
    nav.className = 'main-navigation';
    
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Clima', id: 'clima' },
        { name: 'Paises', id: 'paises' },
        { name: 'Contacto', id: 'contacto' }
    ];


    navItems.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = `#${item.id}`;
        link.className = 'nav-link';
        link.dataset.page = item.id;


        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            onNavigate(item.id);

        });
        li.appendChild(link);
        nav.appendChild(li);
    });

    nav.querySelector('[data-page="home"]').classList.add('active');

    return nav;
}
