import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Search from "../features/Search.jsx";

import { fetchAllMeals } from "../services/api.js";

function RecipesPage() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsData = await fetchAllMeals();
        if (!mealsData || mealsData.length === 0) {
          console.log("No meals found");
        }
        setMeals(mealsData);
        setFilteredMeals(mealsData);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
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
      <div className="mb-12 text-orange-300">
        <Search onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredMeals.length === 0 ? (
            <p>No items were found</p>
          ) : (
            filteredMeals.map((meal) => (
              <div
                key={meal._id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Link to={`/recipes/${meal._id}`}> 
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-default-orange">{meal.name}</h3>
                  <p className="text-sm mb-2">
                    {meal.category.map((category, index) => (
                      <span key={index} className="mr-2">
                        {category}
                      </span>
                    ))}
                  </p>
                  <Link
                    to={`/recipes/${meal._id}`}
                    className="text-default-orange hover:text-hover-orange"
                  >
                    View Details
                  </Link>
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
