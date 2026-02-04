import React, { useState, useEffect } from 'react';

const ApiPokemon = () => {
    const [data, setData] = useState([]);

    const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"//process.env.API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_API_URL);
                const result = await response.json()

                setData(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData()
    }, []); 

    return (
        <div>
            <ul>
                {data.results.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiPokemon;