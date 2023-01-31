import React, { useContext, useState } from 'react';
import DataContext from '../Context/DataContext';

function Filter() {
  const {
    categories,
    setSearch,
    search,
    filter,
    setFilter,
  } = useContext(DataContext);

  const [category, setCategory] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const clickFilter = ({ target }) => {
    const { name, value } = target;
    setCategory((prevState) => (
      { ...prevState, [name]: value }
    ));
  };

  const filterButton = () => {
    setFilter([...filter, category]);
    setCategory((prevState) => ({ ...prevState,
      column: categories[0] }));
  };

  const deleteFilter = (e) => {
    setFilter(filter.filter((item) => item !== e));
  };

  const cleanButton = () => {
    setFilter([]);
  };

  return (
    <div>
      <div>
        <h1>Star Wars Project</h1>
        <span> Name </span>
        <input
          onChange={ handleChange }
          data-testid="name-filter"
          type="text"
          value={ search }
        />
      </div>
      <div>
        <label htmlFor="column">
          Column
          <select data-testid="column-filter" name="column" onChange={ clickFilter }>
            {categories
              .filter((e) => !filter
                .map((item) => item.column)
                .includes(e))
              .map((e) => (
                <option key={ e } value={ e }>
                  {e}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            onChange={ clickFilter }
            data-testid="comparison-filter"
            name="comparison"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            onChange={ clickFilter }
            data-testid="value-filter"
            type="numbers"
            name="value"
            value={ category.value }
          />
        </label>
        <button
          onClick={ filterButton }
          data-testid="button-filter"
          type="button"
        >
          Filtro
        </button>
        { filter.map((ele) => (
          <p data-testid="filter" key={ ele.column }>
            { `${ele.column} | ${ele.comparison} | ${ele.value}`}
            <button
              type="button"
              onClick={ () => deleteFilter(ele) }
            >
              Delete
            </button>
          </p>
        )) }
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ cleanButton }
        >
          Remove Filters
        </button>
      </div>
    </div>

  );
}

export default Filter;
