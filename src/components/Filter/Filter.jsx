import PropTypes from 'prop-types';
import {FaSearch} from 'react-icons/fa'
import { FilterInput, Label } from "./Filter.styled";



function Filter({ value, onChange }) {
  return (
    <div>
      <Label><FaSearch size='14'></FaSearch>Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="Введите запрос для поиска"
        required
        onChange={onChange}
        value={value}
      /></Label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Filter;
