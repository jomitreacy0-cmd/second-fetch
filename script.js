const container = document.getElementById("countries-container");

fetch("https://countries.dev/countries?fields=name,capital,region,population,flag&limit=12")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch countries");
        }

        return response.json();
    })
    .then(countries => {

        countries.forEach(country => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <div class="flag">${country.flag || "🌍"}</div>

                <h2>${country.name}</h2>

                <p><strong>Capital:</strong> ${country.capital || "Not available"}</p>

                <p><strong>Region:</strong> ${country.region || "Not available"}</p>

                <p><strong>Population:</strong> ${
                    country.population
                        ? country.population.toLocaleString()
                        : "Not available"
                }</p>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => {
        console.error("Error:", error);

        container.innerHTML = `
            <p>Unable to load countries.</p>
        `;
    });