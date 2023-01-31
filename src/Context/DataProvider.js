import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';

import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const [categories, setCategories] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  console.log(setCategories);

  const [filter, setFilter] = useState([]);

  const URL = 'https://swapi.dev/api/planets';

  useEffect(() => {
    const requestApi = async () => {
      try {
        const response = await fetch(URL);
        const { results } = await response.json();
        const filteredData = results.filter((result) => {
          if (Object.prototype.hasOwnProperty.call(result, 'residents')) {
            delete result.residents;
          }
          return results;
        });
        setData(filteredData);
      } catch (erro) {
        throw new Error(erro);
      }
    };
    requestApi();
  }, [setData]);

  const contextUse = useMemo(
    () => ({ data,
      setData,
      categories,
      filter,
      setFilter,
      setSearch,
      search,
    }),
    [data, categories,
      filter, setFilter, setSearch, search],
  );

  return (
    <DataContext.Provider value={ contextUse }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
