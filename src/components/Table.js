import React, { useContext, useState, useEffect } from 'react';

import DataContext from '../Context/DataContext';

function Table() {
  const {
    data,
    filter,
    search } = useContext(DataContext);

  const [filterPlanets, setFilterPlanets] = useState([]);

  useEffect(() => {
    let details = data;
    filter.forEach((e) => {
      details = details.filter((info) => {
        switch (e.comparison) {
        case 'maior que':
          return Number(info[e.column]) > Number(e.value);
        case 'menor que':
          return Number(info[e.column]) < Number(e.value);
        case 'igual a':
          return Number(info[e.column]) === Number(e.value);
        default:
          return true;
        }
      });
    });
    setFilterPlanets(details);
  }, [data, filter]);

  console.log(filterPlanets);

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
          {filterPlanets
            .filter((e) => e.name.toLowerCase()
              .includes(search.toLowerCase()))
            .map((info) => (
              <tr key={ info.name }>
                <th>{info.name}</th>
                <th>{info.rotation_period}</th>
                <th>{info.orbital_period}</th>
                <th>{info.diameter}</th>
                <th>{info.climate}</th>
                <th>{info.gravity}</th>
                <th>{info.terrain}</th>
                <th>{info.surface_water}</th>
                <th>{info.population}</th>
                <th>{info.films}</th>
                <th>{info.created}</th>
                <th>{info.edited}</th>
                <th>{info.url}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
// import React, { useEffect, useState } from 'react';

// function Table() {
//   const [planet, setPlanet] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   const URL = 'https://swapi.dev/api/planets';
//   const onChange = (event) => {
//     const { target } = event;
//     setFiltered(target.value);
//   };

//   useEffect(() => {
//     const apiUrl = async () => {
//       const data = await fetch(URL);
//       const list = await data.json();
//       const filteredPlanet = list.results;
//       setPlanet(filteredPlanet);
//     };
//     apiUrl();
//   }, [planet]);
//   return (
//     <div>
//       <input
//         onChange={ onChange }
//         data-testid="name-filter"
//         type="text"
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Rotation Period</th>
//             <th>Orbital Period</th>
//             <th>Diameter</th>
//             <th>Climate</th>
//             <th>Gravity</th>
//             <th>Terrain</th>
//             <th>Surface Water</th>
//             <th>Population</th>
//             <th>Films</th>
//             <th>Created</th>
//             <th>Edited</th>
//             <th>URL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             planet.filter(({ name }) => name.includes(filtered)).map((planets) => (
//               <tr key={ planets.name }>
//                 <th>{planets.name}</th>
//                 <th>{planets.rotation_period}</th>
//                 <th>{planets.orbital_period}</th>
//                 <th>{planets.diameter}</th>
//                 <th>{planets.climate}</th>
//                 <th>{planets.gravity}</th>
//                 <th>{planets.terrain}</th>
//                 <th>{planets.surface_water}</th>
//                 <th>{planets.population}</th>
//                 <th>{planets.films}</th>
//                 <th>{planets.created}</th>
//                 <th>{planets.edited}</th>
//                 <th>{planets.url}</th>
//               </tr>

//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }
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
