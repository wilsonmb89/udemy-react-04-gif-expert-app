import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!inputValue && inputValue.length > 2) {
      setCategories(categories => {
        if (!categories.some(cat => cat === inputValue)) {
          setInputValue('');
          return [inputValue, ...categories];
        }
        return categories;
      });
    }
  };

  return (
    <form noValidate
      onSubmit={handleSubmit}
    >
      <input type="text"
        placeholder='Ingrese una categoría'
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;