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
    <div className="max-w-xs mx-auto mb-10">
      <p className="text-center text-default-orange mb-2">Search for foods</p>
      <input
        type="text"
        placeholder="Search by name or category"
        onChange={handleChange}
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-hover-orange transition-colors duration-300 ease-in-out hover:border-default-orange"
      />
    </div>
  );
}

export default Search;
