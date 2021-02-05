fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

    function displayCountries(data){
        for (let i = 0; i < data.length; i++) {
            const country = data[i];
            const countriesDiv = document.getElementById('countries');

            const countryDiv = document.createElement('div');
            const name = document.createElement('h3');
            name.innerText = country.name;
            const capital = document.createElement('p');
            capital.innerText = country.capital;
            countryDiv.appendChild(name);
            countryDiv.appendChild(capital);

            countriesDiv.appendChild(countryDiv);
        }
    }