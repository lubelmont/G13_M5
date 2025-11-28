import _ from 'lodash';
import { createHeader } from './components/header.js';
import './styles/index.css';

import profile from './assets/images/Profile.png';


import { createNavigation } from './components/navigation.js';
import { createCountrySection } from './pages/contriesPage.js';

import { createUserPage, displayUsers } from './pages/usuariosPage.js';
import { createClimaPage } from './pages/climaPage.js';
import { createCountryPage } from './pages/contriesPage.js';


console.log('Lodash version:', _.VERSION);


let currentPage = null;
function navigateToPage(pageId) {

    if (currentPage){
        currentPage.remove();
    }

    const pageContainer = document.getElementById('page-container');
    switch(pageId) {
        case 'home':
            currentPage = createUserPage();
            break;
        case 'paises':
            currentPage = createCountryPage();
            break;
        case 'clima':
            currentPage = createClimaPage();
            break;
        default:
            currentPage = document.createElement('div');
            currentPage.textContent = 'Página en construcción';
    }

    pageContainer.appendChild(currentPage);
    



}


function init() {

    const app = document.getElementById('app');
    app.innerHTML = '';

    const header = createHeader('Modulo de Navegación');
    const navigation = createNavigation(navigateToPage);


    const pageContainer = document.createElement('div');
    pageContainer.id = 'page-container';
    pageContainer.className = 'page-container';



    app.appendChild(header);
    app.appendChild(navigation);
    app.appendChild(pageContainer);

    navigateToPage('home');

}

function handleNavigation(pageId) {
    console.log('Navigating to:', pageId);
    const sections = document.querySelectorAll('.user-section, .country-section');
    sections.forEach(section => section.style.display = 'none');

    if (pageId === 'home') {
        sections.forEach(section => section.style.display = 'block');
    } else if (pageId === 'clima') {
        alert('Clima page is under construction.');
    } else {
        alert(`The ${pageId} page is under construction.`);
    }


}










// function createButton(text, onClick) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.className = 'main-button';
//     button.addEventListener('click', onClick);
//     return button;
// }



document.addEventListener('DOMContentLoaded', init);
