import StarWars from "./StarWarsContext";
import { useState, useEffect } from 'react';
import React from "react";

const Provider = ({ children }) => {
    const [data, setData] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [filters, setFilters] = useState({
        filters: {
            filterByName: {
              name: '',
            },
            filterByNumericValues: [{
              column: '',
              comparison: '',
              value: 0,
            }],
          },
    });

    const endpoint = `https://swapi-trybe.herokuapp.com/api/planets/?page=2`;

    const fecthPlanets =  async () => {
        try {
            const request = await fetch(endpoint);
            const response = await request.json();
            setData(response.results);
            setPlanets(response.results)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fecthPlanets();
    }, []);

    return (
        <StarWars.Provider value={{
            data,
            planets,
            setPlanets,
            filters,
            setFilters
        }}>
            {children}
        </StarWars.Provider>
    );

};

export default Provider;