import _ from 'lodash';
import { createHeader } from './components/header.js';
import './styles/index.css';

import profileActive from './assets/images/profile_active.svg';
import profileInactive from './assets/images/profile_inactive.svg';
import profile from './assets/images/Profile.png';
import countries from './assets/data/countries.json5';



console.log('Lodash version:', _.VERSION);





const users = [
    { name: 'Alice', isActive: true, age: 30, departament: 'HR', image: profile  },
    { name: 'Bob', isActive: false, age: 25, department: 'IT', image: profile },
    { name: 'Charlie', isActive: true, age: 35, department: 'Finance', image: profile },
    { name: 'Diana', isActive: false, age: 28, department: 'Marketing', image: profile },
    { name: 'Ethan', isActive: true, age: 32, department: 'IT', image: profile },
    { name: 'Fiona', isActive: true, age: 29, department: 'HR', image: profile },
];



function init() {

    const app = document.getElementById('app');

    const header = createHeader('Cualquier titulo Dinámico');
    const userSecction = createUserSection();
    const countrySection = createCountrySection();
    const button = createButton('Click Me', () => {
        alert('Button Clicked!');
    });

    app.appendChild(header);
    app.appendChild(userSecction);
    app.appendChild(countrySection);
    app.appendChild(button);


    displayUsers(users);
    displayCountries(countries);

}

function displayCountries(countries){
    const countryList = document.getElementById('country-list');
    countryList.innerHTML = '';
    
    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';
        countryCard.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>Nombre oficial: ${country.name.official}</p>
            <p>Capital: ${country.capital.join(', ')}</p>
        `;
        countryList.appendChild(countryCard);
    });
}

function createCountrySection() {
    const section = document.createElement('div');
    section.className = 'country-section';

    const title = document.createElement('h2');
    title.textContent = 'Country Information';
    section.appendChild(title);
    const countryList = document.createElement('div');
    countryList.id = 'country-list';
    section.appendChild(countryList);

    return section;
}


function displayUsers(users){
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = `user-card ${user.isActive ? 'active' : 'inactive'}`;
        userCard.innerHTML = `
            <img src="${user.image}" alt="${user.name}" height="50"/>
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Department: ${user.department}</p>
        `;
        userList.appendChild(userCard);
    });
}



function createUserSection() {
    const section = document.createElement('div');
    section.className = 'user-section';

    const title = document.createElement('h2');
    title.textContent = 'User Information';
    section.appendChild(title);

    const userList = document.createElement('div');
    userList.id = 'user-list';
    section.appendChild(userList);

    return section;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'main-button';
    button.addEventListener('click', onClick);
    return button;
}



document.addEventListener('DOMContentLoaded', init);
