import React, { useEffect, useState } from 'react';

function Table() {
  const [planet, setPlanet] = useState([]);

  const URL = 'https://swapi.dev/api/planets';

  useEffect(() => {
    const apiUrl = async () => {
      const data = await fetch(URL);
      const list = await data.json();
      const filteredPlanet = list.results;
      setPlanet(filteredPlanet);
    };
    apiUrl();
  }, [planet]);
  return (
    <div>
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
          {
            planet.map((planets) => (
              <tr key={ planets.name }>
                <th>{planets.name}</th>
                <th>{planets.rotation_period}</th>
                <th>{planets.orbital_period}</th>
                <th>{planets.diameter}</th>
                <th>{planets.climate}</th>
                <th>{planets.gravity}</th>
                <th>{planets.terrain}</th>
                <th>{planets.surface_water}</th>
                <th>{planets.population}</th>
                <th>{planets.films}</th>
                <th>{planets.created}</th>
                <th>{planets.edited}</th>
                <th>{planets.url}</th>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  );
}
//   const apiUrl = () => {
//       setLoading(true);
//       fetch('https://swapi.dev/api/planets')
//       .then((response) => response.json())
//       .then((data) => {
//           const obj = data.response.map()(response) => {
//              delete response.residents;
//               return response;
//             <Table>
//       <thead>
//         <tr>
//   <th>Name</th>
//   <th>Rotation Period</th>
//   <th>Orbital Period</th>
//   <th>Diameter</th>
//   <th>Climate</th>
//   <th>Gravity</th>
//   <th>Terrain</th>
//   <th>Surface Water</th>
//   <th>Population</th>
//   <th>Films</th>
//   <th>Created</th>
//   <th>Edited</th>
//   <th>URL</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           planet.map((planet) => (
//             <tr key={ planet.name }>
//                 <th>{planet.name}</th>
//               <th>{planet.rotation_period}</th>
//               <th>{planet.orbital_period}</th>
//               <th>{planet.diameter}</th>
//               <th>{planet.climate}</th>
//               <th>{planet.gravity}</th>
//               <th>{planet.terrain}</th>
//               <th>{planet.surface_water}</th>
//               <th>{planet.population}</th>
//               <th>{planet.films}</th>
//               <th>{planet.created}</th>
//               <th>{planet.edited}</th>
//               <th>{planet.url}</th>
//             </tr>

// ))
//         }
//       </tbody>
//     </Table>
export default Table;
