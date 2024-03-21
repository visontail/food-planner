import PropTypes from 'prop-types';

function Search({ onSearch }) {
  Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  const handleChange = (e) => {
      const value = e.target.value;
      onSearch(value);
  };

  return (
      <>
          <p>Search field</p>
          <input
              type="text"
              placeholder="Search by name or category"
              onChange={handleChange}
          />
      </>
  );
}

export default Search;
