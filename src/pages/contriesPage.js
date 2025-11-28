
import countries from '../assets/data/countries.json5';


export function createCountryPage() {
    const page = document.createElement('div');
    page.className = 'page country-page';
    page.id = 'country-page';


    const title = document.createElement('h2');
    title.textContent = 'Country Information';
    page.appendChild(title);
    const countryList = document.createElement('div');
    countryList.id = 'country-list';
    page.appendChild(countryList);
    
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

    return page;
}



