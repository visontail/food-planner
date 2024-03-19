import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Search from '../features/Search.jsx'

import { fetchAllMeals } from '../services/api.js'

function RecipesPage() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsData = await fetchAllMeals();
        if (!mealsData || mealsData.length === 0) {
          console.log('No meals found');
        }
        setMeals(mealsData);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <>
      <Header />
      <div>
      <h2>THIS IS THE recipes PAGE</h2>
      <Search />
      <div>
        {meals.map((meal) => (
          <div key={meal._id} className=" border-2 border-red-300 ">
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
        ))}
      </div>
    </div>
      <Footer />
    </>
  )
}

export default RecipesPage