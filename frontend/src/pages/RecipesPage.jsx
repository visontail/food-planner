import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Search from '../features/Search.jsx'

import { fetchAllMeals } from '../services/api.js'

function RecipesPage() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const mealsData = await fetchAllMeals();
              if (!mealsData || mealsData.length === 0) {
                  console.log('No meals found');
              }
              setMeals(mealsData);
              setFilteredMeals(mealsData);
          } catch (error) {
              console.error('Error fetching meals:', error);
          }
      };
      fetchData();
  }, []);

  const handleSearch = (query) => {
      setSearchQuery(query);
      const filtered = meals.filter(
          (meal) =>
              meal.name.toLowerCase().includes(query.toLowerCase()) ||
              meal.category.some((category) =>
                  category.toLowerCase().includes(query.toLowerCase())
              )
      );
      setFilteredMeals(filtered);
  };

  return (
      <>
          <Header />
          <div>
              <h2>THIS IS THE recipes PAGE</h2>
              <Search onSearch={handleSearch} />
              <div>
                  {filteredMeals.length === 0 ? (
                      <p>No items found matching "{searchQuery}"</p>
                  ) : (
                      filteredMeals.map((meal) => (
                          <div key={meal._id} className="border-2 border-red-300">
                              <Link to={`/recipes/${meal._id}`}>
                                  <img /* src={meal.image_url} */ alt={meal.name} />
                              </Link>
                              <div>
                                  <h3>{meal.name}</h3>
                                  <p>
                                      {meal.category.map((category, index) => (
                                          <span key={index} className="mr-2">
                                              {category}
                                          </span>
                                      ))}
                                  </p>
                                  <Link to={`/recipes/${meal._id}`}>View Details</Link>
                              </div>
                          </div>
                      ))
                  )}
              </div>
          </div>
          <Footer />
      </>
  );
}

export default RecipesPage;