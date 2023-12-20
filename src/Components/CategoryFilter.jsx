import React from 'react';

const CategoryFilter = ({ categories, filterProducts }) => {
  const handleChange = (e) => {
    filterProducts(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filtrar por categoría:</label>
      <select id="category" onChange={handleChange}>
        <option value="all">Todas</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;