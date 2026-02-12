const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(limit = 20, offset = 0) {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    return res.json();
}

export async function getPokemonById(id) {
    const res = await fetch(`${BASE_URL}/pokemon/${id}`);

    return res.json();
}

export async function getTypes() {
    const res = await fetch(`${BASE_URL}/type`);

    return res.json();
}