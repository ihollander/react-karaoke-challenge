import React from 'react';

const Filter = ({ filterTerm, onFilterChange }) => {

    const onChange = e => {
      onFilterChange(e.target.value)
    }

    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={filterTerm} onChange={onChange} />
      </div>
    )
}

export default Filter;
