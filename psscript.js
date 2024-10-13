/*
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const pokemonData = (search) => {
    document.querySelector(".search-container").classList.add("hidden")
    const pokemonName = [...search.toLowerCase().replace(".", "-")].filter(val => val.match(/[a-z♂♀0-9]/))
        .map(val => {
        const syms = {"♂":"-m", "♀":"-f"};
        return syms[val] ? syms[val] : val; 
    }).join("");
    searchInput.value == "" ? null : fetch(`${url}/${pokemonName}`)
    .then((res) => res.json())
    .then((data) =>
        {
            showStats(data);
        })
    .catch((err) => {
        console.error("Fetch Error: Pokemon not in database")
        alert("Pokémon not found")
        });
    console.log(searchInput.value, pokemonName)
};

const showStats = (obj) => {
    const {name, height, id, weight, stats, types, sprites} = obj;
    pokemonId.textContent = `#${id}`;
    pokemonName.textContent = name.toUpperCase();
    pokemonWeight.textContent = weight;
    pokemonHeight.textContent = height;
    document.querySelector(".search-container").classList.remove("hidden");
    document.querySelector("#image").innerHTML = `<img src="${sprites[ "front_default"]}" id="sprite" />`
    stats.forEach((exp) => {
        const {base_stat, stat} = exp;
        document.getElementById(`${stat.name}`).textContent = base_stat;
    });
    pokemonTypes.innerHTML = types.map(exp => {
        const {type} = exp;
        return `<div>
        <p class="${type.name} type">${type.name}</p>
        </div>`
    }).join("");
}

searchBtn.addEventListener("click", () => {
    pokemonData(searchInput.value);
    });*/
