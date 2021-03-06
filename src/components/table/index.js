import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './index.css';

function Table() {
  const {
    planets,
    filters: { filters: { filterByName: { name } } },
  } = useContext(StarWarsContext);

  return (
    <div>
      {planets ? (
        <div>
          <h1 className='title'>PLANETAS</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
                <th>Edited</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {planets
                .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
                .map((item) => (
                  <tr key={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.edited}</td>
                    <td>{item.url}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : <h1>Loading...</h1>}
    </div>
  );
}

export default Table;