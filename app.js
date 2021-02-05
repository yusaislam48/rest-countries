fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

function displayCountries(data) {
    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        const countriesDiv = document.getElementById('countries');
        const countryDiv = document.createElement('div');

        // const name = document.createElement('h3');
        // name.innerText = country.name;
        // const capital = document.createElement('p');
        // capital.innerText = country.capital;
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);

        countryDiv.className = 'country';

        const countriesInfo = `
                <h2><span class="country-name">Country Name: </span>${country.name}</h2>
                <h4>Capital: <span class="capital-name">${country.capital}</span></h4>
                <button onClick="displayCountryDetails('${country.name}')" class="btn btn-warning">Details</button>    
            `
        countryDiv.innerHTML = countriesInfo;
        countriesDiv.appendChild(countryDiv);
    }
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = data => {
    console.log(data);
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${data.name}</h1>
        <p>Population: ${data.population}</p>
        <p>Area: ${data.area}</p>
        <img class ="img-fluid" src="${data.flag}" alt="flag image">

    `
}